<script lang="ts">
  interface Command {
    description: string;
    args?: string[];
    fn?: (flags: string[], args: string[]) => string | void;
  }

  interface ParsedCommand {
    name: string;
    flags: string[];
    arguments: string[];
  }

  let commands: string[] = [];

  const definedCommands: { [key: string]: Command } = {
    help: {
      description: 'Shows a list of commands',
      fn: () => {
        return Object.keys(definedCommands).join(', ');
      }
    },
    clear: {
      description: 'Clears the terminal',
      fn: () => {
        commands = [];
      }
    },
    echo: {
      description: 'Prints a message',
      args: ['message'],
      fn: (_: string[], args: string[]) => args.join(' ')
    }
  };

  let value: string;

  let currentCommandIndex: number = -1;
  let beforeChangeCommandIndex: string = '';

  function onkeydown(e: KeyboardEvent) {
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
      return;
    }

    e.preventDefault();

    if (commands.length === 0) {
      return;
    }

    if (currentCommandIndex === commands.length) {
      beforeChangeCommandIndex = value;
    }

    if (e.key === 'ArrowUp' && currentCommandIndex !== 0) {
      currentCommandIndex--;
    } else if (e.key === 'ArrowDown' && currentCommandIndex !== commands.length) {
      currentCommandIndex++;
    }

    value = commands[currentCommandIndex] || beforeChangeCommandIndex;
  }

  function onkeypress(e: KeyboardEvent) {
    if (e.key !== 'Enter' || value === '') {
      return;
    }

    commands = [...commands, value];
    value = '';
    currentCommandIndex = commands.length;
  }

  function parseCommand(command: string): ParsedCommand {
    const parsed: ParsedCommand = {
      name: '',
      flags: [],
      arguments: []
    };
    let currentPart: string = '';
    let isParsingFlags: boolean = true;

    const pushCurrentPart = (): void => {
      if (currentPart !== '') {
        if (isParsingFlags && currentPart.startsWith('-')) {
          parsed.flags.push(currentPart);
        } else {
          parsed.arguments.push(currentPart);
        }
        currentPart = '';
      }
    };

    for (let i = 0; i < command.length; i++) {
      const char: string = command[i];

      if (char === ' ') {
        pushCurrentPart();
      } else if (char === '"' || char === "'") {
        const closingQuoteIndex: number = command.indexOf('"', i + 1);
        if (closingQuoteIndex !== -1) {
          currentPart = command.slice(i + 1, closingQuoteIndex);
          i = closingQuoteIndex;
          pushCurrentPart();
        }
      } else if (char === '-' && command[i + 1] === '-') {
        pushCurrentPart();
        isParsingFlags = false;
        i += 1;
      } else if (char === '-') {
        pushCurrentPart();
        currentPart = char;
      } else {
        currentPart += char;
      }
    }

    pushCurrentPart();

    if (parsed.arguments.length > 0) {
      parsed.name = parsed.arguments.shift() as string;
    }

    return parsed;
  }

  function handleCommand(command: ParsedCommand): string | void {
    const commandHandler = definedCommands[command.name];

    if (!commandHandler) {
      return 'Command not found';
    }

    if (commandHandler.fn) {
      if (command.arguments.length < (commandHandler.args || []).length) {
        return `Usage: ${command.name} ${commandHandler.args?.join(' ')}`;
      }

      const e = commandHandler.fn(command.flags, command.arguments);

      if (typeof e === 'string') {
        return e;
      }
    }
  }
</script>

<section class="w-screen min-h-screen all:fw-400 all:text-xl p-4 flex flex-col gap-2">
  {#each commands as command}
    <div>
      <p><span class="text-purple fw-800">guest@local:</span> {command}</p>
      <p>{handleCommand(parseCommand(command))}</p>
    </div>
  {/each}

  <div class="flex gap-2">
    <p class="text-purple fw-800">guest@local:</p>
    <input
      type="text"
      placeholder="help"
      bind:value
      on:keypress={onkeypress}
      on:keydown={onkeydown}
      class="bg-transparent color-white outline-none border-none w-full"
    />
  </div>
</section>

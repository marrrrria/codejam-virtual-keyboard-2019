class Button {
    constructor(obj) {
      this.id = obj.code;
      this.first = obj.first;
      this.second = obj.second;
      this.type = obj.type;
      this.button = this.createEl();
    }
    createEl = () => {
        const el = document.createElement('div');
        el.innerText = this.first;
        el.id = this.id;
        el.classList.add(this.type, 'button', 'up');
        if (this.first === 'Space') {
          el.classList.add('space');
          el.innerText = '';
        }
        return el;
      };
    
      render = () => {
        return this.button;
      };
  }

  class Row {
    constructor(arr) {
      this.row = document.createElement('div');
      this.row.classList.add('row');
      arr.forEach(el => this.row.appendChild(el));
    }
  
    render() {
      return this.row;
    }
  }

  klass keyboard {
    constructor() {
        const firstRow = [
          { code: '192', first: '`', second: 'ё', type: 'letter' },
          { code: '49', first: '1', second: '!', type: 'letter' },
          { code: '50', first: '2', second: '@', type: 'letter' },
          { code: '51', first: '3', second: '#', type: 'letter' },
          { code: '52', first: '4', second: '$', type: 'letter' },
          { code: '53', first: '5', second: '%', type: 'letter' },
          { code: '54', first: '6', second: '^', type: 'letter' },
          { code: '55', first: '7', second: '&', type: 'letter' },
          { code: '56', first: '8', second: '*', type: 'letter' },
          { code: '57', first: '9', second: '(', type: 'letter' },
          { code: '48', first: '0', second: ')', type: 'letter' },
          { code: '189', first: '-', second: '_', type: 'letter' },
          { code: '187', first: '=', second: '+', type: 'letter' },
          { code: '8', first: 'Backspace', second: 'Backspace', type: 'func' },
        ];
        
     const secondRow = [
          { code: '9', first: 'Tab', second: 'Tab', type: 'func' },
          { code: '81', first: 'q', second: 'й', type: 'letter' },
          { code: '87', first: 'w', second: 'ц', type: 'letter' },
          { code: '69', first: 'e', second: 'у', type: 'letter' },
          { code: '82', first: 'r', second: 'к', type: 'letter' },
          { code: '84', first: 't', second: 'е', type: 'letter' },
          { code: '89', first: 'y', second: 'н', type: 'letter' },
          { code: '85', first: 'u', second: 'г', type: 'letter' },
          { code: '73', first: 'i', second: 'ш', type: 'letter' },
          { code: '79', first: 'o', second: 'щ', type: 'letter' },
          { code: '80', first: 'p', second: 'з', type: 'letter' },
          { code: '219', first: '[', second: 'х', type: 'letter' },
          { code: '221', first: ']', second: 'ъ', type: 'letter' },
          { code: '220', first: '\\', second: '|', type: 'letter' },
        ];
        const middleRow = [
          { code: '20', first: 'Caps Lock', second: 'Caps Lock', type: 'func' },
          { code: '65', first: 'a', second: 'ф', type: 'letter' },
          { code: '83', first: 's', second: 'ы', type: 'letter' },
          { code: '68', first: 'd', second: 'в', type: 'letter' },
          { code: '70', first: 'f', second: 'а', type: 'letter' },
          { code: '71', first: 'g', second: 'п', type: 'letter' },
          { code: '72', first: 'h', second: 'р', type: 'letter' },
          { code: '74', first: 'j', second: 'о', type: 'letter' },
          { code: '75', first: 'k', second: 'л', type: 'letter' },
          { code: '76', first: 'l', second: 'д', type: 'letter' },
          { code: '186', first: ';', second: 'ж', type: 'letter' },
          { code: '222', first: "'", second: 'э', type: 'letter' },
          { code: '13', first: 'Enter', second: 'Enter', type: 'func' },
        ];
        
  
    const fourthRow = [
          { code: '16', first: 'Shift', second: 'ShiftLeft', type: 'func' },
          { code: '90', first: 'z', second: 'я', type: 'letter' },
          { code: '88', first: 'x', second: 'ч', type: 'letter' },
          { code: '67', first: 'c', second: 'с', type: 'letter' },
          { code: '86', first: 'v', second: 'м', type: 'letter' },
          { code: '66', first: 'b', second: 'и', type: 'letter' },
          { code: '78', first: 'n', second: 'т', type: 'letter' },
          { code: '77', first: 'm', second: 'ь', type: 'letter' },
          { code: '188', first: ',', second: 'б', type: 'letter' },
          { code: '190', first: '.', second: 'ю', type: 'letter' },
          { code: '191', first: '/', second: '.', type: 'letter' },
          { code: '38', first: '▲', second: 'up', type: 'func' },
          { code: '16', first: 'Shift', second: 'ShiftRight', type: 'func' },
        ];
        const fifthRow = [
          { code: '17', first: 'Ctrl', second: 'CtrlLeft', type: 'func' },
          { code: '18', first: 'Alt', second: 'AltLeft', type: 'func' },
          { code: '32', first: 'Space', second: 'Space', type: 'letter' },
          { code: '18', first: 'Alt', second: 'AltRight', type: 'func' },
          { code: '17', first: 'Ctrl', second: 'CtrlRight', type: 'func' },
          { code: '37', first: '◄', second: 'left', type: 'func' },
          { code: '40', first: '▼', second: 'down', type: 'func' },
          { code: '39', first: '►', second: 'right', type: 'func' },
        ];
        const firstRowEl = firstRow.map(obj => new Button(obj).render());
        const secondRowEl = secondRow.map(obj => new Button(obj).render());
        const middleRowEl = middleRow.map(obj => new Button(obj).render());
        const fifthRowEl = fifthRow.map(obj => new Button(obj).render());
        const fourthRowEl = fourthRow.map(function(obj) {
          return new Button(obj).render();
        });
        this.Row1 = new Row(firstRowEl).render();
        this.Row2 = new Row(secondRowEl).render();
        this.Row3 = new Row(middleRowEl).render();
        this.Row4 = new Row(fourthRowEl).render();
        this.Row5 = new Row(fifthRowEl).render();
        this.capsLock = false;
        this.textArea = document.createElement('textarea');
        this.textArea.rows = '20';
        this.textArea.id = 'text';
        this.probe = document.createElement('div');
        this.probe.style.height = '10px';
        this.value = '';
        this.altshift = '';
      }
    keybDownHandler = e => {
        e.preventDefault();
        const code = e.which;
        const el = document.getElementById(code);
        if (el) {
            el.classList.add("blue");
        }
    }
    keybUpHandler = e => {
        e.preventDefault();
        const code = e.which;
        const el = document.getElementById(code);
           
        if (el) {
          el.classList.remove('blue');
          }
              
        if (el.id === '20' && !this.capsLock) {
          el.classList.add('capsLockOn');
          this.capsLockOn(el);
        } else if (el.id === '20' && this.capsLock) {
          this.capsLockOff(el);
          el.classList.remove('capsLockOn');
        }
  
        if(code===8) {
             this.delete();
      }
        if (el.classList.contains('letter')) {
          let text = el.innerText;
          if (!el.innerText) {
            text = ' ';
          }
          this.write(text);
        }      
    };
    mouseDownHandler = e => {
        e.preventDefault();
        const el = e.target;
        el.classList.remove('up');
        el.classList.add('down');
    };

  }
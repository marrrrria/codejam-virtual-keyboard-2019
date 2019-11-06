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
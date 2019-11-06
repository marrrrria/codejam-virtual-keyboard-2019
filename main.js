class Button {
    constructor(obj) {
      this.id = obj.code;
      this.first = obj.first;
      this.second = obj.second;
      this.type = obj.type;
      this.button = this.createEl();
    }
  }
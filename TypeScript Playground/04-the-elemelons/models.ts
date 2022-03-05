export abstract class Melon {
    protected element: string;
    public weight: number;
    public melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    public get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return `
            Element: ${this.element}
            Sort: ${this.melonSort}
            Element Index: ${this.elementIndex}
        `;
    }
}

export class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Water';
    }
}

export class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Fire';
    }
}

export class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Earth';
    }
}

export class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Air';
    }
}

export class Melolemonmelon extends Firemelon {
    private elementForms = ['Fire', 'Earth', 'Air', 'Water'];
    private elementFormsIndex = 0;

    public morph(): void {
        this.element = this.elementForms[++this.elementFormsIndex % this.elementForms.length];
    }
}
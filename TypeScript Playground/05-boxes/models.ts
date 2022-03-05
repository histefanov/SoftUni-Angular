export default class Box<T> {
    private _box = [];

    public add(item: T): void {
        this._box.push(item);
    }

    public remove(): void {
        this._box.pop();
    }

    get count(): number {
        return this._box.length;
    }
}
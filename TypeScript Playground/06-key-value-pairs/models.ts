export default class KeyValuePair<K, V> {
    private key: K;
    private val: V;

    public setKeyValue(key: K, val: V) {
        this.key = key;
        this.val = val;
    }

    public display(): void {
        console.log(`key = ${this.key}, value = ${this.val}`)
    }
}
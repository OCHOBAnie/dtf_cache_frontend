import snarkdown from 'snarkdown';

export function FromMD(text: string): string {
    return snarkdown(text)
        .replace(/\\_/g, '_')
        .replace('<a href', '<a target="_blank" href')
}
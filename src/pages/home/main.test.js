import { describe, expect, it } from 'vitest';
import sum from './main';

describe('[Home]', () => {
    it('Should return the correct sum', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });
});
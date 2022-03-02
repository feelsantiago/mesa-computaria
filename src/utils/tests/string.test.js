import { describe, expect, it } from "vitest";
import StringUtils from "../string";

describe('[StringUtils]', () => {

    describe('[isEmptyOrBlank]', () => {

        it('Should throw exception if value is not a string', () => {
            expect(() => StringUtils.isEmptyOrBlank(0)).throw('The value must be a string');
        });

        it('Should return true for undefined and null values', () => {
            // eslint-disable-next-line unicorn/no-null
            const nullValue = StringUtils.isEmptyOrBlank(null);
            // eslint-disable-next-line unicorn/no-useless-undefined
            const undefinedValue = StringUtils.isEmptyOrBlank(undefined);

            expect(nullValue).toBe(true);
            expect(undefinedValue).toBe(true);
        });

        it('Should return true for empty strings', () => {
            const empty = StringUtils.isEmptyOrBlank('');
            expect(empty).toBe(true);
        });

        it('Should return true for blank strings', () => {
            const blank = StringUtils.isEmptyOrBlank('     ');
            expect(blank).toBe(true);
        });

        it('Should return false for a regular string', () => {
            const value = StringUtils.isEmptyOrBlank('Regular String');
            expect(value).toBe(false);
        });
    });
});
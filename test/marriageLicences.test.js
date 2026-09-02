/* eslint-disable no-console */
/* eslint-disable node-test/no-async-describe */
import assert from 'node:assert';
import fs from 'node:fs';
import { describe, it } from 'node:test';
import { marriageLicences } from '../index.js';
await describe('ontario-vital-statistics/marriageLicences', async () => {
    const filePath = fs.existsSync('./test/data/_marriageLicences.csv')
        ? './test/data/_marriageLicences.csv'
        : './test/data/marriageLicences.sample.csv';
    await it('should parse a marriage licences file', () => {
        const parsedData = marriageLicences.parseFromFilePath(filePath);
        console.log(parsedData);
        assert.ok(parsedData.length > 0);
    });
});

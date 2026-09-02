/* eslint-disable perfectionist/sort-interfaces */
import fs from 'node:fs';
import camelCase from 'camelcase';
import Papa from 'papaparse';
const papaparseConfig = {
    header: true,
    skipEmptyLines: true,
    transformHeader(header) {
        return camelCase(header.trim());
    }
};
function isMarriageLicence(data) {
    return (typeof data.reference === 'string' &&
        typeof data.received === 'string' &&
        typeof data.issueDate === 'string' &&
        typeof data.viewableUntil === 'string' &&
        typeof data.applicant === 'string' &&
        typeof data.applicantPresentAddressOrMailingAddress === 'string' &&
        typeof data.applicantPermanentAddressOrPostalAddress === 'string' &&
        typeof data.jointApplicant === 'string' &&
        typeof data.jointApplicantPresentAddressOrMailingAddress === 'string' &&
        typeof data.jointApplicantPermanentAddressOrPostalAddress === 'string' &&
        typeof data.createdBy === 'string' &&
        typeof data.licenceNumber === 'string' &&
        typeof data.issuer === 'string' &&
        typeof data.status === 'string');
}
/**
 * Parses a CSV file containing marriage licences into an array of valid MarriageLicence objects.
 * @param filePath - The path to the CSV file containing marriage licences.
 * @returns An array of valid MarriageLicence objects.
 */
export function parseFromFilePath(filePath) {
    const rawData = fs.readFileSync(filePath).toString();
    return parseFromData(rawData);
}
/**
 * Parses raw CSV data into an array of valid MarriageLicence objects.
 * @param rawData - The raw CSV data as a string.
 * @returns An array of valid MarriageLicence objects.
 */
export function parseFromData(rawData) {
    const parsedData = Papa.parse(rawData, papaparseConfig);
    const validData = parsedData.data.filter(isMarriageLicence);
    return validData;
}

/**
 * Represents a date in the format DD-MMM-YY
 */
type MarriageLicenceDate = `${number}-${string}-${number}`;
export interface MarriageLicence {
    reference: string;
    received: MarriageLicenceDate;
    issueDate: '' | MarriageLicenceDate;
    viewableUntil: MarriageLicenceDate;
    applicant: string;
    applicantPresentAddressOrMailingAddress: string;
    applicantPermanentAddressOrPostalAddress: string;
    jointApplicant: string;
    jointApplicantPresentAddressOrMailingAddress: string;
    jointApplicantPermanentAddressOrPostalAddress: string;
    createdBy: 'Applicant' | 'Municipality';
    licenceNumber: string;
    issuer: string;
    status: 'Archived' | 'Cancelled';
}
/**
 * Parses a CSV file containing marriage licences into an array of valid MarriageLicence objects.
 * @param filePath - The path to the CSV file containing marriage licences.
 * @returns An array of valid MarriageLicence objects.
 */
export declare function parseFromFilePath(filePath: string): MarriageLicence[];
/**
 * Parses raw CSV data into an array of valid MarriageLicence objects.
 * @param rawData - The raw CSV data as a string.
 * @returns An array of valid MarriageLicence objects.
 */
export declare function parseFromData(rawData: string): MarriageLicence[];
export {};

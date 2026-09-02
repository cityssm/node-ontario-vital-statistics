/* eslint-disable perfectionist/sort-interfaces */

import fs from 'node:fs'

import camelCase from 'camelcase'
import Papa from 'papaparse'

const papaparseConfig: Papa.ParseConfig = {
  header: true,
  skipEmptyLines: true,

  transformHeader(header) {
    return camelCase(header.trim())
  }
}

/**
 * Represents a date in the format DD-MMM-YY
 */
type MarriageLicenceDate = `${number}-${string}-${number}`

export interface MarriageLicence {
  reference: string

  received: MarriageLicenceDate
  issueDate: '' | MarriageLicenceDate
  viewableUntil: MarriageLicenceDate

  applicant: string
  applicantPresentAddressOrMailingAddress: string
  applicantPermanentAddressOrPostalAddress: string

  jointApplicant: string
  jointApplicantPresentAddressOrMailingAddress: string
  jointApplicantPermanentAddressOrPostalAddress: string

  createdBy: 'Applicant' | 'Municipality'
  licenceNumber: string
  issuer: string
  status: 'Archived' | 'Cancelled'
}

function isMarriageLicence(
  data: Partial<MarriageLicence>
): data is MarriageLicence {
  return (
    typeof data.reference === 'string' &&
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
    typeof data.status === 'string'
  )
}

/**
 * Parses a CSV file containing marriage licences into an array of valid MarriageLicence objects.
 * @param filePath - The path to the CSV file containing marriage licences.
 * @returns An array of valid MarriageLicence objects.
 */
export function parseFromFilePath(
  filePath: string
): MarriageLicence[] {
  const rawData = fs.readFileSync(filePath).toString()
  return parseFromData(rawData)
}

/**
 * Parses raw CSV data into an array of valid MarriageLicence objects.
 * @param rawData - The raw CSV data as a string.
 * @returns An array of valid MarriageLicence objects.
 */
export function parseFromData(
  rawData: string
): MarriageLicence[] {
  const parsedData = Papa.parse<Partial<MarriageLicence>>(
    rawData,
    papaparseConfig
  )

  const validData = parsedData.data.filter(isMarriageLicence)

  return validData
}

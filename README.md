# Ontario Vital Statistics for Node

Tools for municipalities working with Ontario's Vital Statistics data.

## Included Tools

- Parser for **marriage licence** exports.

## Installation

```sh
npm install @cityssm/ontario-vital-statistics
```

## Usage

```javascript
import { marriageLicences } from '@cityssm/ontario-vital-statistics'

const licences = marriageLicences.parseFromFilePath(
  './path/to/archived_tab_2026-01-01_2026-01-31.csv'
)

console.log(licences[0])
/*
{
    reference: '26-000000',

    received: '17-Jan-26',
    issueDate: '20-Jan-26',
    viewableUntil: '17-Jan-27',

    applicant: 'Fred Flintstone',
    applicantPresentAddressOrMailingAddress:
      '345 Cave Stone Road, Bedrock, P3B 8L3, ONTARIO, CANADA',
    applicantPermanentAddressOrPostalAddress:
      '345 Cave Stone Road, Bedrock, P3B 8L3, ONTARIO, CANADA',

    jointApplicant: 'Wilma Slaghoople',
    jointApplicantPresentAddressOrMailingAddress:
      '345 Cave Stone Road, Bedrock, P3B 8L3, ONTARIO, CANADA',
    jointApplicantPermanentAddressOrPostalAddress:
      '345 Cave Stone Road, Bedrock, P3B 8L3, ONTARIO, CANADA',

    createdBy: 'Applicant',
    licenceNumber: 'G0123456',
    issuer: 'Barney Rubble',
    status: 'Archived'
}
*/
```

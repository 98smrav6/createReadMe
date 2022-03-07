//Function to return license badge
//if no license, return an empty string
function renderLicesnseBadge(license) {
    if (license !== 'None') {
        return '![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
}

//Function that returns the license link
//if no license, return an empty string
function renderLicenseLink(license) {
    if (licesnse !== 'None') {
        return '\n* [License](#license)\n';
    }
    return '';
}
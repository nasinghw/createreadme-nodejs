//README Generator

// Read a file in Node.js
const fs = require("fs");

//requirejs() to load path data 
const path = require('path');

//requirejs() to load inquirer data 
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown");

// Create array of questions
const questions = [
    {
        type: 'input',
        name: 'mytitle',
        message: 'What is title of your project?'
    },
    {
        type: 'input',
        name: 'mydesc',
        message: 'Please provide project description'
    },

    {
        type: 'input',
        name: 'myinstall',
        message: 'Please provide user instructions for installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions'
    },
    {
        type: 'checkbox',
        name: 'mylicense',
        message: 'Please select your license',
        choices: ['MIT', 'Apache 2.0', 'Unlicense']
    },
    {
        type: 'input',
        name: 'mycontribution',
        message: 'Please enter all contributors'
    },
    {
        type: 'input',
        name: 'mytest',
        message: 'Please provide test information'
    },
    {
        type: 'input',
        name: 'myemail',
        message: 'Please provide your email address'
    },
    {
        type: 'input',
        name: 'fullname',
        message: 'Please enter your full name'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'))
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers)
        const { mytitle, mydesc, myinstall, usage, mylicense, mycontribution, mytest, myemail, fullname } = answers
        let licenseBadge;
        let licenseContent;
        switch (mylicense[0]) {
            case "MIT":
                licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                licenseContent = `
                MIT License

                Copyright (c) 2024 ${fullname}
                
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.`
                break;
                case "Apache 2.0":
                licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
                licenseContent = `
                Apache License
                Version 2.0, January 2004
            http://www.apache.org/licenses/

            Copyright (c) 2024 ${fullname}

                        TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
 
                        "License" shall mean the terms and conditions for use, reproduction,
                        and distribution as defined by Sections 1 through 9 of this document.

                        "Licensor" shall mean the copyright owner or entity authorized by
                        the copyright owner that is granting the License.

                        "Legal Entity" shall mean the union of the acting entity and all
                        other entities that control, are controlled by, or are under common
                        control with that entity. For the purposes of this definition,
                        "control" means (i) the power, direct or indirect, to cause the
                        direction or management of such entity, whether by contract or
                        otherwise, or (ii) ownership of fifty percent (50%) or more of the
                        outstanding shares, or (iii) beneficial ownership of such entity.

                        "You" (or "Your") shall mean an individual or Legal Entity
                        exercising permissions granted by this License.

                        "Source" form shall mean the preferred form for making modifications,
                        including but not limited to software source code, documentation
                        source, and configuration files.

                        "Object" form shall mean any form resulting from mechanical
                        transformation or translation of a Source form, including but
                        not limited to compiled object code, generated documentation,
                        and conversions to other media types.

                        "Work" shall mean the work of authorship, whether in Source or
                        Object form, made available under the License, as indicated by a
                        copyright notice that is included in or attached to the work
                        (an example is provided in the Appendix below).

                        "Derivative Works" shall mean any work, whether in Source or Object
                        form, that is based on (or derived from) the Work and for which the
                        editorial revisions, annotations, elaborations, or other modifications
                        represent, as a whole, an original work of authorship. For the purposes
                        of this License, Derivative Works shall not include works that remain
                        separable from, or merely link (or bind by name) to the interfaces of,
                        the Work and Derivative Works thereof.

                        "Contribution" shall mean any work of authorship, including
                        the original version of the Work and any modifications or additions
                        to that Work or Derivative Works thereof, that is intentionally
                        submitted to Licensor for inclusion in the Work by the copyright owner
                        or by an individual or Legal Entity authorized to submit on behalf of
                        the copyright owner. For the purposes of this definition, "submitted"
                        means any form of electronic, verbal, or written communication sent
                        to the Licensor or its representatives, including but not limited to
                        communication on electronic mailing lists, source code control systems,
                        and issue tracking systems that are managed by, or on behalf of, the
                        Licensor for the purpose of discussing and improving the Work, but
                        excluding communication that is conspicuously marked or otherwise
                        designated in writing by the copyright owner as "Not a Contribution."

                        "Contributor" shall mean Licensor and any individual or Legal Entity
                        on behalf of whom a Contribution has been received by Licensor and
                        subsequently incorporated within the Work.

                        2. Grant of Copyright License. Subject to the terms and conditions of
                        this License, each Contributor hereby grants to You a perpetual,
                        worldwide, non-exclusive, no-charge, royalty-free, irrevocable
                        copyright license to reproduce, prepare Derivative Works of,
                        publicly display, publicly perform, sublicense, and distribute the
                        Work and such Derivative Works in Source or Object form.

                        3. Grant of Patent License. Subject to the terms and conditions of
                        this License, each Contributor hereby grants to You a perpetual,
                        worldwide, non-exclusive, no-charge, royalty-free, irrevocable
                        (except as stated in this section) patent license to make, have made,
                        use, offer to sell, sell, import, and otherwise transfer the Work,
                        where such license applies only to those patent claims licensable
                        by such Contributor that are necessarily infringed by their
                        Contribution(s) alone or by combination of their Contribution(s)
                        with the Work to which such Contribution(s) was submitted. If You
                        institute patent litigation against any entity (including a
                        cross-claim or counterclaim in a lawsuit) alleging that the Work
                        or a Contribution incorporated within the Work constitutes direct
                        or contributory patent infringement, then any patent licenses
                        granted to You under this License for that Work shall terminate
                        as of the date such litigation is filed.

                        4. Redistribution. You may reproduce and distribute copies of the
                        Work or Derivative Works thereof in any medium, with or without
                        modifications, and in Source or Object form, provided that You
                        meet the following conditions:

                        (a) You must give any other recipients of the Work or
                        Derivative Works a copy of this License; and

                        (b) You must cause any modified files to carry prominent notices
                        stating that You changed the files; and

                        (c) You must retain, in the Source form of any Derivative Works
                        that You distribute, all copyright, patent, trademark, and
                        attribution notices from the Source form of the Work,
                        excluding those notices that do not pertain to any part of
                        the Derivative Works; and

                        (d) If the Work includes a "NOTICE" text file as part of its
                        distribution, then any Derivative Works that You distribute must
                        include a readable copy of the attribution notices contained
                        within such NOTICE file, excluding those notices that do not
                        pertain to any part of the Derivative Works, in at least one
                        of the following places: within a NOTICE text file distributed
                        as part of the Derivative Works; within the Source form or
                        documentation, if provided along with the Derivative Works; or,
                        within a display generated by the Derivative Works, if and
                        wherever such third-party notices normally appear. The contents
                        of the NOTICE file are for informational purposes only and
                        do not modify the License. You may add Your own attribution
                        notices within Derivative Works that You distribute, alongside
                        or as an addendum to the NOTICE text from the Work, provided
                        that such additional attribution notices cannot be construed
                        as modifying the License.

                        You may add Your own copyright statement to Your modifications and
                        may provide additional or different license terms and conditions
                        for use, reproduction, or distribution of Your modifications, or
                        for any such Derivative Works as a whole, provided Your use,
                        reproduction, and distribution of the Work otherwise complies with
                        the conditions stated in this License.

                        END OF TERMS AND CONDITIONS`
                break;
            case "Unlicense":
                licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
                licenseContent = `
                This is free and unencumbered software released into the public domain.

                Anyone is free to copy, modify, publish, use, compile, sell, or
                distribute this software, either in source code form or as a compiled
                binary, for any purpose, commercial or non-commercial, and by any
                means.
                
                In jurisdictions that recognize copyright laws, the author or authors
                of this software dedicate any and all copyright interest in the
                software to the public domain. We make this dedication for the benefit
                of the public at large and to the detriment of our heirs and
                successors. We intend this dedication to be an overt act of
                relinquishment in perpetuity of all present and future rights to this
                software under copyright law.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
                ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
                
                For more information, please refer to <https://unlicense.org>`
                break;

        }
        const myreadmefile = `${licenseBadge}\n\n\n${mytitle}\n\n\n## Description:${mydesc}\n\n\n## Table of contents:\n\n-[Description](#description)\n- [Installation](#installation-instructions)\n- [Usage](#usage-instructions)\n- [License](#license)\n- [Contribution](#contribution)\n- [Tests](#tests)\n- [Questions](#questions)\n\n\n## Installation Instructions:\n\n\n${myinstall}\n\n\n## Usage Instructions:\n\n\n${usage}\n\n\n## License:\n\n\n${mylicense}\n\n\n## Contribution:\n\n\n${mycontribution}\n\n\n## Tests:\n\n\n${mytest}\n\n\n## Questions:\n\n\nPlease sent your questions to email.\n\n- [Email](mailto:${myemail})\n\n\n`
        console.log(myreadmefile)
        writeToFile("READMEEXAMPLE.md", myreadmefile)
    })

};



// function call to initialize program
init();
<!-- markdownlint-disable MD033 -->
<div style="text-align: center;">
  <img alt="NTCIP" src="images/NTCIP.jpg">
  <strong>Proposed Draft</strong>
  <h1>Intelligent Transportation Systems (ITS) Open-Source Development</h1>
  <strong>An open-source specification proposed for the NTCIP Joint Committee</strong>
</div>
<!-- markdownlint-enable MD033 -->

## Important Links

- [Website for most recent version](https://k-vaughn.github.io/ITS-open-source/)
- [PDF of most recent version](https://k-vaughn.github.io/ITS-open-source/)
- [Previously released versions](https://www.github.com/k-vaughn/ITS-open-source/releases)
- [Discussion forum](https://k-vaughn.github.io/ITS-open-source/discussions)
- [Report an issue](https://k-vaughn.github.io/ITS-open-source/issues)
- [Report a security issue](SECURITY.md)
- [Requirements for making contributions](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [License](LICENSE.md), which references the [Creative Commons CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/).

![Creative Commons CC BY 4.0 License](https://i.creativecommons.org/l/by/4.0/88x31.png)

## Installation Instructions

This is a documentation-only project. The current version of the document is
available as a [website](https://k-vaughn.github.io/ITS-open-source/) or as a
[pdf file](https://k-vaughn.github.io/ITS-open-source/pdf) that can be
downloaded. Contributors will need to
[fork](https://k-vaughn.github.io/ITS-open-source/contributor-responsibilities/#fork-the-repository)
and [clone](https://k-vaughn.github.io/ITS-open-source/contributor-responsibilities/#clone-the-repository)
the repository and
[establish the development environment](https://k-vaughn.github.io/ITS-open-source/contributor-responsibilities/#install-software)
on their local machine so that they can ensure that their edits are rendered as
expected.

This project uses the following tools:

- Git
- GitHub
- MkDocs
- Materials for MkDocs

The proess to install the local environment is defined in the
[documentation conventions](https://k-vaughn.github.io/ITS-open-source/)
of the [ITS Open-Source Process](https://k-vaughn.github.io/ITS-open-source/)
with no exceptions or extensions.

## Project Summary

### Status

The project is currently a proposal and has not been reviewed by the broader
NTCIP community. As such it is hosted on the proposer's
[GitHub account](https://github.com/k-vaughn/ITS-open-source).

### Overview

The ITS Openb-Source Process defines the process to be used to maintain
open-source resources of the NTCIP Joint Committee. This specification itself
is proposed to be an open-source resource, which is maintained by the process
defined by the specification. Anyone who wishes to contribute to or maintain an
NTCIP open-source resource project should start by familiarizing themselves with
[this process](https://k-vaughn.github.io/ITS-open-source/).

This specification is adapted from the
[OpenSauced Introduction](https://github.com/open-sauced/intro) and tailored to
meet the needs of the ITS community. While a product of NTCIP, it is envisioned
to be used in open-source efforts beyond the NTCIP community and it can be
further tailored to meet the needs of each ITS open-source resource project.

### Project Plan

#### Overview

At their May 2024 meeting, the NTCIP Joint Committee identified a need to
develop an alternative development path that could be followed to speed
standards development with the recognition that this development path might
result in a less mature standard. Ken Vaughn was tasked with leading the effort
defining how this could be done. The proposal is contained in two parts:

- the ITS Open-Source Process (this document), which is designed to allow
  documents to be defined in an open-source environment; and
- a revised NTCIP Standardization Process (NTCIP 8001) to reflect an approval
  process that is faster than the traditional NTCIP ballot process (e.g., an
  experimental specification)

In general, it is envisioned that the open-source process lends itself to the
faster experimental specification; however, the open-source process could be
used to develop a document that was then approved through the traditional
approval process. Likewise, the traditional standards development process could
be used to create an experimental specification that is approved through a
simplified approval process. As a result, the single request from the Joint
Committee for a streamlined process resulted in these two parts.

At this time, this proposal is a proposal from an individual. The next steps
envisioned for this project are as follows:

#### Features

The first version of the document needs to define the responsibilities for
commentors, contributors, maintainers, and WGs. It should also provide a set of
documentation and coding conventions along with a sample template for a new
GitHub project with all necessary files for basic operations.

#### Priorities

The document can be developed in any order but is expected to be developed in
the order of the items mentioned in the features list.

#### Release Schedule

- 2024-Nov: Submit to the NTCIP Joint Committee to be recognized as an
  experimental specification project with assignment to a WG
- 2024-Nov: Migrate the current project to the ITE-org GitHub account and tag as
  release 0.0.0
- 2025-Jan: Meeting of WG to identify and prioritize issues that need to be addressed
- 2025-Jan: Develop project plan to complete work
- 2025-Jun: First release of experimental specification

### Acknowledgements

This project is sponsored by the Base Standards and Profiles 2 Working Group
(BSP2 WG) of the National Transportation Communications Interface Protocols
(NTCIP) Joint Committee (JC), a joint standardization committee of the American
Association of State Highway Transportation Officials (AASHTO), the Institute of
Transportation Engineers (ITE), and the National Electrical Manufacturers
Association (NEMA). It has benefited from funding from the US Department of
Transportation (USDOT).

## 🤝 Open-Source Development

Within traditional standards development processes, stakeholder concerns are
reported as comments, primarily during defined stages of the project. Within an
open-source environment, concerns are documented as issues and can be submitted
at any time.

All updates to the project are initiated by a stakeholder first reporting an
issue. Issues can be as minor as reporting a typo or as major as suggesting a
new section or complete rewrite of the document. If you have identified an
issue, please submit it on our
[Issues](https://k-vaughn.github.io/ITS-open-source/issues) page.

When submitting an issue, the commenter is required to identify the type of
issue and then provide specific information for that issue. Issue types that are
applicable to this project include:

- **Bug report:** used to report an issue or inaccuracy in the documentation
- **Documentation enhancement:** used to suggest improvements to the project documentation
- **New requirement request:** used to propose a new requirement to be added to
  the documentation
- **Requirement modification request:** used to suggest a modification to an
  existing requirement

If you identify a security issue, please report it using our [security process](SECURITY.md).

As with comments in the traditional standards process, issues are reviewed and
prioritized prior to being addressed. In the traditional process, the initial
review is performed by the editor; within the open-source process, the review is
performed by the maintainer. Depending on the impact of the issue, the
maintainer can either prioritize the issue directly or might seek guidance from
the working group.

Once an issue has been prioritized, it is made available for anyone in the
open-source community to make a contribution to address the issue.

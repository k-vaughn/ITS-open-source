<style>
body {
  counter-reset: section 1; 
}
</style>

# General {.body}

## Scope {.body}

This document specifies the process used to produce open-source projects within the field of Intelligent Transportation Systems (ITS).

The process follows general practices within the larger open-source community; however, this document:

- provides a step-by-step overview of the process, so that those unfamiliar with open-source processes can better understand the process and become contributors,
- formalizes the process (e.g., by clearly defining what are requirements), and
- tailors the process (e.g., by defining the preferred tools to be used).

The process to approve the resultant product is defined elsewhere (e.g., NTCIP 8001).

The ITS Open-Source Process is based on the practices defined by [open-sauced](https://github.com/open-sauced/intro/tree/main). However, whereas open-sauced is written as an informative guide and describes how systems can work; this document is written as a specification to define how the ITS Open-Source Process will work. While still providing a discussion of the issues; it highlights the requirements and notable options along the way by stating each in its own paragraph, starting the paragraph with the requirement (REQ) or option (OPT) number. Conditional requirements are listed as requirements, but include a condition in the text (e.g., If X, then ...). The remaining text provides further guidance and can include additional options that do not necessitate specific numbering.

We recognize that onboarding to a new project can be challenging, especially if you're new to open source development. Be patient, and don't be discouraged by setbacks or mistakes. You'll become more comfortable and confident in your contributions with persistence and practice.

## References {.body}

The following documents are referenced by this document. At the time of publication, the editions indicated were valid.

### Normative References {.body}

Normative references contain provisions that, through reference in this text, constitute provisions of this document. All standards are subject to revision, and parties to agreements based on this standard are encouraged to investigate the possibility of applying the most recent editions of the standard listed.

- [ISO/IEC/IEEE 24765:2017](https://standards.iso.org/ittf/PubliclyAvailableStandards/c071952_ISO_IEC_IEEE_24765_2017.zip): *Systems and software engineering — Vocabulary, 2017*
- [GitHub](https://github.com/dashboard)
- [MkDocs](https://www.mkdocs.org)
- [Materials for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [ReqView](https://www.reqview.com)
- [Python](https://www.python.org/downloads/)

### Other References

Other references are included to provide a more complete understanding of this document and its relationship to other documents.

#### Other Resources for Contributors

This document standardizes and tailors certain aspects of the information contained in open-sauced; however, it is not a complete replacement of that material. If you wish to learn more about open-source development, the following materials may be of interest:

- [What is open-source?](https://opensauced.pizza/learn/intro-to-oss/what-is-open-source)
- [Why open-source?](https://opensauced.pizza/learn/intro-to-oss/why-open-source)
- [The Secret Sauce](https://opensauced.pizza/learn/intro-to-oss/the-secret-sauce)
- [Types of Open-Source Contributions](https://opensauced.pizza/learn/intro-to-oss/types-of-contributions)
- [Open Source Guides](https://opensource.guide)
- [Introduction to GitHub and Open Source Projects](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source)

#### Other Resources for Maintainers

If you wish to learn more about open-source maintenance, the following materials may be of interest:

- [Understanding the Role of an Open Source Maintainer](https://opensauced.pizza/learn/becoming-a-maintainer/intro)
- [How to Communicate and Collaborate Effectively](https://opensauced.pizza/learn/becoming-a-maintainer/communication-and-collaboration)
- [Building Community](https://opensauced.pizza/learn/becoming-a-maintainer/building-community)
- [Maintainer Power Ups](https://opensauced.pizza/learn/becoming-a-maintainer/maintainer-powerups)
- [Building Your Team](https://opensauced.pizza/learn/becoming-a-maintainer/your-team)
- [The Power of Open Source Metrics ](https://opensauced.pizza/learn/becoming-a-maintainer/metrics-and-analytics)
- [Contributor Ladder Template](https://github.com/cncf/project-template/blob/main/CONTRIBUTOR_LADDER.md)
- [Maintainer Community](https://maintainers.github.com/auth/signin)

## General Statements

The remainder of this document is broken into the following chapters:

- **Commenting Process:** Details the process of contributing to open-source projects and provides step-by-step processes for using the preferred tools of the ITS open-source projects.
- **Contribution Process:** Details the process of contributing to open-source projects and provides step-by-step processes for using the preferred tools of the ITS open-source projects.
- **Maintenance Process:** Details the rules that project maintainers are to follow when managing an ITS open-source project. This includes processes for setting up new projects, managing issues and pull requests, maintaining quality, and coordinating with standard development organizations.
- **Approval Process:** Defines the approval stages for ITS open-source projects and the processes required for approval for each stage and subsequent tagging and publication of versions.[^move to 8001]
- **Documentation Conventions:** Annex B defines the preferred styles, processes, and tools for developing documentation for ITS open-source projects, including projects that are 100% documentation (e.g., the ITS Open-Source Process project).
- **Code Conventions:** Annex C defines the styles, processes, and tools for developing computer code for ITS open-source projects, including Python and ASN.1.
- **Requirements Management:** Defines preferred ways to use requirement management tools to produce content that can be easily integrated into the ITS open-source pojects while providing clear traceability.

[^move to 8001]: TODO: Move the approval process to NTCIP 8001

module.exports = {
    "rules": [
        {
            "names": ["require-heading-body"],
            "description": "Headings must end with {.body}",
            "tags": ["headings"],
            "function": function rule(params, onError) {
                params.tokens.forEach((token) => {
                    if (token.type === "heading_open") {
                        const headingContent = params.lines[token.map[0]];
                        const isValid = headingContent.trim().endsWith("{.body}");
                        if (!isValid) {
                            onError({
                                lineNumber: token.lineNumber,
                                detail: "Headings must end with {.body}",
                                context: headingContent.trim()
                            });
                        }
                    }
                });
            }
        },
        {
            "names": ["require-heading-annex"],
            "description": "Headings must end with {.annex}",
            "tags": ["headings"],
            "function": function rule(params, onError) {
                params.tokens.forEach((token) => {
                    if (token.type === "heading_open") {
                        const headingContent = params.lines[token.map[0]];
                        const isValid = headingContent.trim().endsWith("{.annex}");
                        if (!isValid) {
                            onError({
                                lineNumber: token.lineNumber,
                                detail: "Headings must end with {.annex}",
                                context: headingContent.trim()
                            });
                        }
                    }
                });
            }
        }
    ]
};
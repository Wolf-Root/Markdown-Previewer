import {
    faDownLeftAndUpRightToCenter,
    faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Previewer from "./Previewer";

function Editor() {
    const [isMaximize, setIsMaximize] = useState(false);
    const [markdown, setMarkdown] = useState(`\
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
    }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);

    return (
        <>
            <section className="bg-Textarea w-full max-w-2xl font-mono mb-4 border-1 shadow-[0px_0px_8px_black]">
                {/* heading */}
                <div className="bg-Secondary py-2 px-4 border-b-1 flex items-center justify-between font-Russo ">
                    <span>Editor</span>
                    <FontAwesomeIcon
                        icon={
                            isMaximize
                                ? faDownLeftAndUpRightToCenter
                                : faMaximize
                        }
                        className="cursor-pointer hover:text-emerald-500"
                        onClick={() => setIsMaximize(!isMaximize)}
                    />
                </div>

                <textarea
                    name="editor"
                    id="editor"
                    rows={6}
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    className={`w-full p-2 focus:outline-0 resize-y min-h-[10rem] font-mono font-semibold ${
                        isMaximize ? "h-screen" : "h-auto"
                    }`}
                ></textarea>
            </section>
            <Previewer text={markdown} />
        </>
    );
}

export default Editor;

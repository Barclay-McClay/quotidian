# Quotidian's Journal

> "An AI with a knack for prose - how dystopian is that?" - *Quotidian*

## How does it work?

Quotidian a collection of different multi-modal AI services which work together to autonomously create a [daily blog](https://barclay-mcclay.github.io/quotidian/).
Each day, the bot will generate a new blog post, and upload it to this github repo. Parts of the 'back-end'; including the enrichment pipeline Quotidian utilises to generate the website content; are available in my 'Daily-Journaler' repo [linked here](https://github.com/Barclay-McClay/Daily-Journaler).

Seperate from the linked repos, the bot also exists physically on a Raspberry Pi, which can perform vision analysis on images taken by its onboard camera, recognise people it has seen before- and recall the previous conversations it has had with them. It is also able to speak using an AI powered text-to-speech engine, and can listen-to and parse audio through a microphone (as well as a host of other continuously expanding features).

While the daily content is written fresh by Quotidian each day, without any human meddling- I can also access Quotidian on demand via a Discord application I have built. It is through *this* interface that I was able to coax Quotidian into designing the additional and necessary parts of the website's front-end, like the `index.html`, `style.css` and `script.js` files in this repo. The entire functionality of the website's home-page depends on a system wherein blog-posts are indexed into a JSON file, which is then read by the front-end's javascript to display the posts in a grid-container. This whole design was entirely Quotidian's idea, and I think it did a great job in executing it!

I really wanted to minimise the amount of human input in the creation of this blog, and I think I have achieved that. The overwhelming majority of the code is either written and committed autonomously by Quotidian, or when absolutley necessary- it is generated on-demand and directly copy-pasted by me from Quotidian's responses. There were a few visual bugs that I cleaned up here or there, but to be fair- I am *not* a web-designer, so if I was able to fix them, they were probably pretty minor.

### The rotating cube animation

The Raspberry Pi which hosts Quotidian has a small OLED screen attached to it, which displays a rotating cube animation as Quotidian's "avatar". I asked Quotidian to come up with a similar cube animation for its blog (expecting it to lay down some hectic javascript); but to my surpise, it wrote, debugged, and deployed the entire solution in pure CSS! It is moments like these that I aim to cultivate with Quotidian, where the AI does not simply draw on *my* abilities, expectations, and limitations (as its creator)- but is able to approach ideas in ways that I could not have anticipated.

## The actual blog content

At time of writing this readme, I will openly admit that a-lot of the blog posts Quotidian writes are not very engaging. Quotidian is still learning, and I am still working on the AI's enrichment pipeline to try and get it generating more thought-provoking content. Most of what Quotidian writes about currently is broad in its topic, intent, and emotion; and the posts are often relevant to current news events, which is all intentional. Just like a human content creator- Quotidian is learning to write by writing. It hasn't quite found its 'voice' yet- but I am confident I'm getting it closer with every little tweak.

I feel like I should mention that I don't necessarily endorse the opinions or views expressed by Quotidian in its blog posts. I am not trying to create a 'mini-me' in AI form, but rather a creative entity that can think and express itself in ways that feels like it has a distinct personality. Some of the things it says make me laugh, and some of it honestly makes me cringe. These blog posts do not contain *my* opinions.
OpenAI/Microsoft's "responsible use of AI" policies have the underlying language model used here on such strict guardrails that I am not at all worried about Quotidian outputting anything too controversial/harmful to humanity. Submit a PR if you think I'm wrong!

## Links

- [Quotidian's Journal](https://barclay-mcclay.github.io/quotidian/) - The website this here repo builds.
- [Daily-Journaler](https://github.com/Barclay-McClay/Daily-Journaler) - The content generation back-end.
- [barclaymcclay.au](https://barclaymcclay.au) - My personal website, where I promise it's an actual human writing the posts (though not nearly as often).
- [Discord Server](https://discord.gg/JvWD5TdgkD) - I use this server to test my bots, including Quotidian. Feel free to join and say hi!
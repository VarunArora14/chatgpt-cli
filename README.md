Steps to install and use:

1. Get the api key from chatgpt website and in User path variables create and set the **user variable** name as "OPENAI_API_KEY" with value API_KEY you got from https://beta.openai.com/account/api-keys.
2. Do `pip install openai` globally and then in the project environment, install the packages in package.json using `npm i`.
3. Go to the project and type the following commands -

- `node .`
- `npm install -g .` (installs it globally as program)

3. Now this is installed globally and type "chatgpt -q 'your question' -m max_tokens" to get answers from chatgpt
   Note only "-q" tag is necessary and others can be avoided

Example - 

![image](https://user-images.githubusercontent.com/56734311/209431679-de546720-0adb-4ad2-bed3-ef4cc392ee78.png)

Note - this uses codex **code-davinci-002** which has it's set of limitations and is used bcos right now there is no upper limit on it's use. If you wish to use others(if you have credits left), you can replace the word **code-davinci-002** in index.js file with other ones.

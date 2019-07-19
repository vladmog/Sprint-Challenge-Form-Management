# Answers

- [ ] Why are forms used so often in web applications and software?

    Forms are the primary method by which to obtain information from the end-user.


- [ ] What advantages are there by using a forms library like Formik?

    Formik pre-packages a lot of functionality that would otherwise have to be coded by the developer.
    For example, changeHandlers, submitHandlers, etc.


- [ ] What is stateful logic?

    Stateful logic is logic where the same vessel that stores data also performs logical operations on that logic, for example a custom hook.

- [ ] What is a custom hook, and what does it mean to compose hooks together?

    A custom hook is function wrapped around a hook, and the function returns a value and a function that, together, can be used like a hook but with custom functionality. You can place a custom hook within another custom hook thereby composing them together.


- [ ] Describe the process of retriving a token from a server and using that token in subsequent API calls.

    When a user registers or logs in via a POST CRUD call to a pre-determined endpoint, a token string will be returned that is used by a server to verify a user's identity/clearance for subsequent protected API calls. To make such protected API calls, the token that was given needs to be passed in as a header with each API call.


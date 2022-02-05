# not-react

It's definitely not React

## Quality

### Formatting

**Why?**

- To force code to be consistently formatted across the project
- To avoid spaces/tabs holy wars

**How?**

- Using [Prettier](https://prettier.io/)

### Linting

**Why?**

- To fix common issues in the code
- To enforce some static code quality attributes
- To enforce additional formatting rules
- To enforce code consistency

**How?**

- Using [eslint](https://eslint.org/)

###

To enforce consistent code

- Linting ([eslint](https://eslint.org/))
- Styling (Prettier)
- Tests (jest)
  - Must pass
  - Coverage
- Pre-commit (husky) - enforce gates
- Static analysis (SonarCloud)

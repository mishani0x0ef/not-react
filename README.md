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

### Testing

**Why?**

- To have constant proof that code working properly
- To avoid refactoring mistakes

**How?**

- Using [jest](https://jestjs.io/)
- Using TDD
- Enforcing coverage (more than `90%`)

### Bundle Size

**Why?**

- Lib must be small and performant

**How?**

- Using [bundlesize](https://github.com/siddharthkp/bundlesize)
- Must be less than `3kB`

### Static analysis

TBD
Static analysis (SonarCloud)

### Pre-commit rules

TBD
Pre-commit (husky) - enforce gates

### Merge rules

TBD

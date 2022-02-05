[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mishani0x0ef_not-react&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=mishani0x0ef_not-react)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=mishani0x0ef_not-react&metric=coverage)](https://sonarcloud.io/summary/new_code?id=mishani0x0ef_not-react)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=mishani0x0ef_not-react&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=mishani0x0ef_not-react)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=mishani0x0ef_not-react&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=mishani0x0ef_not-react)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=mishani0x0ef_not-react&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=mishani0x0ef_not-react)

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

**Why?**

- To make sure that project has high maintainability, reliability and security metrics
- To be able to establish quality gates
- To have constant definition of code quality

**How?**

- Using [SonarCloud](https://sonarcloud.io/)

### Pre-commit rules

**Why?**

- To avoid not-compliant code to be committed
- To provide instant feedback for developers

**How?**

- Using [husky](https://www.npmjs.com/package/husky) and [lint-staged](https://www.npmjs.com/package/lint-staged)
- Check linting and formatting
- Check unit tests and coverage

### Merge rules

**Why?**

- To avoid not-compliant to be merged into `main`

**How?**

- Using GitHub branch protection rules
- Build must succeed
- Tests must pass with appropriate coverage
- Code must pass Sonar's quality gates

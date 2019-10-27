import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/errorRecovery/empty-type-arguments-in-call-expression.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);
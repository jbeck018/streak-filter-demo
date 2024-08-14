import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3100/graphql',
  documents: ['src/graphql/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/generated/': {
      preset: 'client',
      config: {
        documentMode: 'string',
      },
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;

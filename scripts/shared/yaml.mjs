import { parseDocument, isMap, isScalar } from 'yaml';
import { t } from './i18n.mjs';

// YAML in navboxes and the site's data blocks: fail(message, offset) for what is wrong, offset in source.

/** Parse YAML with source diagnostics and bounded alias expansion. */
export function yamlDocument(source, fail) {
  const doc = parseDocument(source);
  if (doc.errors.length) fail(t('build_yaml_invalid', { Message: doc.errors[0].message.split('\n')[0] }), doc.errors[0].pos?.[0] ?? 0);
  try { doc.toJS({ maxAliasCount: 50 }); }
  catch (error) { fail(t('build_yaml_invalid', { Message: error.message }), 0); }
  return doc;
}

/** Fails unless node is a mapping whose keys are among allowed. */
export function mapFields(node, allowed, fail) {
  if (!isMap(node)) fail(t('build_yaml_mapping'), node?.range?.[0] ?? 0);
  for (const pair of node.items) {
    if (!isScalar(pair.key) || !allowed.includes(pair.key.value)) fail(t('build_yaml_unknown_field', { Value: pair.key?.value ?? '' }), pair.key?.range?.[0] ?? 0);
  }
}

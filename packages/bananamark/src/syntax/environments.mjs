import { problem, sourceError } from '../messages.mjs';
import defaultEnvironments from './default-environments.mjs';

export { defaultEnvironments as default };

const merged = new WeakMap(), resolved = new WeakSet([defaultEnvironments]);
/**
 * The environments in use: bananamark's (default-environments.mjs) with the caller's over them (kind → config), a
 * kind given as false removed; given environments in use already (resolved), those.
 */
export function resolveEnvironments(given) {
  if (!given) return defaultEnvironments;
  if (resolved.has(given)) return given;
  if (!merged.has(given)) {
    const environments = Object.fromEntries(Object.entries({ ...defaultEnvironments, ...given }).filter(([, config]) => config !== false));
    resolved.add(environments);
    merged.set(given, environments);
  }
  return merged.get(given);
}

const checked = new WeakSet();
/** Throws unless every kind is lower-case letters with a name (text, or texts by locale) and a group. */
export function checkEnvironments(environments) {
  if (checked.has(environments)) return;
  for (const [kind, config] of Object.entries(environments)) {
    const name = config?.name;
    const named = typeof name === 'string' ? Boolean(name.trim())
      : Boolean(name) && typeof name === 'object' && Object.values(name).length > 0 && Object.values(name).every(value => typeof value === 'string' && value.trim());
    if (!/^[a-z]+$/.test(kind) || !named || !/^[a-z]+$/.test(config.group ?? '') || (config.numbered !== undefined && typeof config.numbered !== 'boolean')) {
      throw sourceError('', problem('environment_config', { kind }));
    }
  }
  checked.add(environments);
}

/**
 * An environment's name (its config's) in a locale: its one name, or its name in that locale, or in English; undefined
 * when it has none of these.
 */
export const environmentName = ({ name }, locale) => typeof name === 'string' ? name : name?.[locale] ?? name?.en;

/**
 * Convert camelCase string to spaced string
 * @param string
 * @returns
 */
export const camelCaseToString = (string: string) => {
    const result = string.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
};

/**
 * @param {string} text
 * @returns {import('./structure').RobotsTxt}
 */
function parseRobots(text) {
    const lines = text.split('\n');

    const result = {
        agents: {},
        Sitemap: []
    };

    let currentAgents = [];

    for (let rawLine of lines) {
        const line = rawLine.trim();

        if (!line || line.startsWith('#')) continue;

        const idx = line.indexOf(':');
        if (idx === -1) continue;

        let key = line.slice(0, idx).trim().toLowerCase();
        let value = line.slice(idx + 1).trim();

        if (key === 'user-agent') {
            const agent = value.toLowerCase();

            if (!result.agents[agent]) {
                result.agents[agent] = {
                    Allow: [],
                    Disallow: []
                };
            }

            currentAgents = [agent];
        }

        else if (key === 'allow') {
            for (const agent of currentAgents) {
                if (value) {
                    result.agents[agent].Allow.push(value);
                }
            }
        }

        else if (key === 'disallow') {
            for (const agent of currentAgents) {
                if (value) {
                    result.agents[agent].Disallow.push(value);
                }
            }
        }

        else if (key === 'sitemap') {
            result.Sitemap.push(value);
        }

        else if (key === 'host') {
            result.Host = value;
        }
    }

    return result;
}

module.exports = parseRobots;
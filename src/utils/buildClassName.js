export default function buildClassName(...parts) {
    return parts.filter(Boolean).join(" ");
};
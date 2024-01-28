export async function i18n(locale: string) {
	/** This works with both turbopack and webpack. */
	// const messages = await import(`../messages/${locale}.json`)

	/** This works with webpack, but fails with turbopack. */
	const messages = await import(`@/messages/${locale}.json`)

	return messages
}

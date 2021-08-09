export const animations = Object.freeze({
	NotSet: 1,
	Rollout: 2,
	Rollback: 3,
})

type Keys = keyof typeof animations
export type animationsTypes = typeof animations[Keys]

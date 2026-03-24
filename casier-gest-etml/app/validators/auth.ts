import vine from '@vinejs/vine'


export const loginValidatior = vine.compile(
  vine.object({

    eduvaudId: vine.string().trim(),
    password: vine.string(),
  })
)

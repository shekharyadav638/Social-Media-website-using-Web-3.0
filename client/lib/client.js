import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '6imvw0am',
  dataset: 'production',
  apiVersion: 'v1',
  token: 'sktGDoiRYImXVhbWzD3ug2kIyBrfMNfCKLH2sn2FvQIgx908Sw6FeVDH6eYbZvybhAcQoRo2Tgwv7GD2mTKU4s9rFIqsBJvAEVLTawWmUTNLUK1jaOhM2wO18ri3SqLp6SGFZNvLNqckIuSpwuoZ5eGT3ovOAn3UPApY38iG8X2er0NXKaCk',
  useCdn: false,
})

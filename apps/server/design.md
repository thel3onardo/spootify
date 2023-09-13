### Data model design

User

- id int
- email string
- email_verified bool
- phone_number string

- profile_image string
- friends(BADNAME) User[]

- createdAt DateTime
- updatedAt DateTime

Artist

- id int
- email string
- email_verified bool
- verified bool

Track

- id int
- name string
- file audio(??)
- cover_image string

- author_id
- album_id

Playlist

- id int
- name string
- tracks Track[]
- description string
- cover_image string

- author_id int

- createdAt DateTime
- modifiedAt DateTime
- deletedAt DateTime

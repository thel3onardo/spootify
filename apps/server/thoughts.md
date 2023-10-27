### Collections

A collection can have more than one contributor. Should I classify all of them as owners?

    Being a "contributor" grants the permission to make cruds of tracks inside the collection

### User

An endpoint for recovering the user's playlists created should exist. Example:
_/api/user/collections_

    Accepting query params, such as:

_/api/user/collections?favorites=true&privates=false_
_/api/user/collections_ -> returns all users playlists, including private and public ones

I will have another table for favorite collections?

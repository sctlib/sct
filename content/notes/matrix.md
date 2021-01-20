---
title: Matrix for communications
slug: matrix-communications
description: How we can communicate with each other on the digital newtorks.
date_created: 2021-01-17
date_updated: 2021-01-17
---

# Matrix

> "An open network for secure, decentralized communication" (matrix.org)
- https://matrix.org

Replaces the use cases of: signal, facebook messenger, whatsapp,
telegram, instagram messenger, slack, skype, microsoft messages,
google hangouts, mattermost, discord, etc.

Probably also replaces the usages of emails, twitter, medium, instagram
(photos, profiles, followers, etc.), reddit, hacker news, (see matrix cerulean).

> Matrix is "new" and developed by a much smaller team than the tech
giants. It is not yet widely used, and some parts of the user
experience are maybe not yet up to what users are used to with major
apps, though it feels its accesibility is improving daily.

Don't get afraid from the difference with the applications you already
know, you will quickly discover how matrix works by using it with
friends, familly, groups, others, projects and within your
organisations. It is the best communication tool available, and has
the potential to eventualy become a standard.

This text is made as presentation, reading it is not required to
understand or use Matrix!

## How to start using Matrix?

You can use the element client:

1. visit https://app.element.io
2. create an account (let the default server, https://matrix.org)
3. login your new user

You can start chatting with a user you know the matrix address of,
create a new room, or start chatting in a exisitng one.

## Matrix foundation

Matrix is developped in the open (free-software on github), by a non proft
foundation.

- foundation: https://matrix.org/foundation
- code: https://github.com/matrix-org
- blog for news: https://matrix.org/blog/posts
- read the official FAQ: https://matrix.org/faq
- official matrix room on matrix [#matrix:matrix.org](https://matrix.to/#/#matrix:matrix.org) 

## Who is using matrix

### Communities

A lot of communities are discussing and organizing on the Matrix
ecosystem (it is possible to explore them in the element client, or here: [view.matrix.org](https://view.matrix.org)).

### Mozilla
The organization, editor of the browser Firefox, has its team
communicating through Matrix https://matrix.org/blog/2019/12/19/welcoming-mozilla-to-matrix

### French Government
- https://matrix.org/blog/2018/04/26/matrix-and-riot-confirmed-as-the-basis-for-frances-secure-instant-messenger-app
- https://www.tchap.gouv.fr/#/welcome, the client used by some french
  civil servents, *tchap*, a fork of element.

### German Government
Currently in test at the ministry of defense"

- https://matrix.org/blog/2019/12/24/the-2019-matrix-holiday-update
- https://www.heise.de/newsticker/meldung/Open-Source-Bundeswehr-baut-eigene-verschluesselte-Messenger-App-4623404.html

## What can matrix be used for

Encrypted chats, one-to-one chats, group chats, video calls, share
files and medias, and more.

### user to user(s) communication

A chat between two users.

> Ex: same usage as facebook, signal, telegram, whatsapp, instagram.

- a user can send a message to an other user
- a user can send a message to a group of users
- a user can send a message to themself

In the client element, messages between two users are encrypted by default.

### public and private rooms (groups)
A **room**, is a group of one or multiple users.

Users can join as many rooms as they want, public, private, or secret rooms.

User messages in rooms can be encrypted on room, depending on the settings of the rooms, set by the room administrators.

You can see a list of public rooms here https://view.matrix.org

### videos calls
You can use peer-to-peer video/audio communication diretly in matrix, and with jtsi (inside matrix) for group calls.

# What makes Matrix great

## usable on all devices
Matrix is cross platform, it runs on computer, on the web (without the
need of any app ever), tablets, linux, apple, windows, android, etc. It can
litterally run on every existing and future machines.

## You don't need a phone or email to use it
In matrix, you can register a new user without the need of a
smartphone, a phone number, or even an email address.

You could want to add an email, or phone number, if you wanted to have
a method for recovering your lost password, but you don't have to.

## an open standard
Matrix is first "an idea", written down on paper as a precise
*specification*, of how communications should work, and how it can be
implemented technically (with current hardware and software
knowledge).

- all the details should be here: https://matrix.org/docs/spec

## encrypted communcations & messages
- conversations between two users are encrypted (by default with the element.io client; see *clients/servers*)
- conversations in groups can be encrypted (or not, your choice)
- history of a group conversation can be made availble to new group
  members, only from when they joined, or since the group creation
  etc.

## a decentralized project
Everyone can host their own matrix server. With *any* spare computer
at home, you can have your own matrix server (but you don't have
to). Having your own server means that you have control over your
data. This also means you can have your own custom matrix address like
`@my-name:my-site.com`, and communicate with people who have their
user created on a totally different server that you've never heard
about: `@an-other-name:an-other-site.org`

With emails, you can have the email address on someone else's server,
@protonmail.com, @gmail.com or @hotmail.com address. It is possible,
for companies, and individuals, to host their own mail server, as well
as matrix server.

## a free software / open source project

Everyone can **copy all the code** that makes matrix, for free.  Free
software & open source make it possible to read the code, to find
mistakes, possible security issues, discuss and improve things, which
leads to a more robust software, accessible to all and enhancable by
everyone.

## interoperable, with bridges

> "Matrix is open to exchanging data and messages with other platforms
using an Open Standard. We refer to the connection to other platforms
as bridging."
- htps://matrix.org/bridges
- see the matrix specs, for the Open Standard: https://matrix.org/docs/spec

# Concepts

To better understand how Matrix works, very similar architecture as for emails (servers, clients, network),
except that it provides encryption by default.

## server & client
- a client: the part of the code, that runs on your device (your
  phone, tablet, computer, tv, smartdevice, fridge, iot...)
- a server: the part of the code, that *does not* run on your
  device. This piece of code
  
When someone uses whatsapp or telegram, the application that is
installed on the user device is the client. The server, is the other
part of the code, at the company's facilities, where the users data is
stored. In the cases of major communication applications, the users
have no control, overview and transparency, of their data, the code or
infrastructure arround the whole projects.

In matrix, everyone can create their own client, and their own server,
or use existing ones.

Servers, if they decide to be federated, communicate with each other,
to synchronise the data of their users who are communicating with each
other.

The matrix foundation provides implementations of the matrix protocol,
for servers and clients.

- matrix default client = element: https://element.io
- a list of other known clients, for various platforms:
  https://matrix.org/clients
- the matrix foundation provides
  [synapse](https://github.com/matrix-org/synapse) (original, and
  current for matrix.org) and
  [dendrite](https://github.com/matrix-org/dendrite)
  ([new](https://matrix.org/blog/2020/10/08/dendrite-is-entering-beta))
  for reference servers implementations
  
## Encryption & devices

Messages in matrix *can be* end to end encrypted.

- https://matrix.org/docs/guides/end-to-end-encryption-implementation-guide

There is one encryption key per device.

Therefore you need to authorize each device thare you are using to
communicate on element/matrix.

## Users and Groups
### a user: @user:server.org

A user, is just like you, an other account to chat with.

- you are: @your-user:your-server.com
- an other user is: @other-user:other-server.com

### a room (= a group): #room:server.org

A user, is just like you, an other account to chat with.

- you are: @your-user:your-server.com
- an other user is: @other-user:other-server.com

People already host public events on matrix
https://matrix.org/docs/guides/running-online-events, or discuss large
projects on a daily basis.

Rooms can be moderated: https://matrix.org/docs/guides/moderation

## Messages (events)

> It is not necessary do read this to use matrix!

Messages in matrix, are data sent between computers (clients and servers), to communicate some sort of information.

This information is usually text, or a media, that we send to (an) other user(s).

In the element.io matrix client, it is possible to click on every
message, and select "view source", to inspect what the data of a
message looks like.

What we see, is a JSON representation of that data `message`; in fact a message is named an `event`.

### non-encrypted event message

The following text, is the data for the `event` (message), with
`event_id`: `$f0oXbbTG2GBHt4n2uoYQWQ-7dOlviw5ASgK55gY2NvQ`. The `id`
is a unique string of text that identifies this particular data in the database.

This event has been sent in the room, with `room_id` = `!cqzGJOZxvLdugovYdy:matrix.org`, at the exact unix time `origin_server_ts`.

```
{
  "content": {
    "body": "test",
    "msgtype": "m.text"
  },
  "origin_server_ts": 1611134958847,
  "sender": "@user:matrix.org",
  "type": "m.room.message",
  "unsigned": {
    "age": 100,
    "transaction_id": "m1611134958702.69"
  },
  "event_id": "$f0oXbbTG2GBHt4n2uoYQWQ-7dOlviw5ASgK55gY2NvQ",
  "room_id": "!cqzGJOZxvLdugovYdy:matrix.org"
}
```

The text, displayed in element.io for this message, is "test" (the data key: `content.body`), and it was sent by user (sender) @user:matrix.org.

We can see that the text, is not encrypted, because we can see it "in clear", written down in the data.

### encrypted event message

Here is an other message's data, sent in an encrypted room:

```
{
  "content": {
    "algorithm": "m.megolm.v1.aes-sha2",
    "ciphertext": "AwgFEoABT7WqLyj8DEXgsRKvuxqs6avOIa6m7En7St7GGn3JYFI0rR5ZvFSX8NmehSMvtm4bjqpmYw8+I1kDJLgeG7NgqermVeK6O3sLt8M0hMVCrORApp7ORqc+Dmdx1uyMIHl+ShGIhw8xFRQ71YEKY2FqDl0PDIcI8SrLj/i+O/deLU12y/q3ocdxDBhzmbTTWZB8gS/SVvrZzTDQPXn37+ZqeHUOIgdWNm5T+qYxxW3axDnLm9XKZ5Se6BUgGQQcauZFW+tLyl+TzAg",
    "device_id": "VRCKJQKYRK",
    "sender_key": "ucG18wH9TNW81JzFQjqGHz3LRcq4fI3UeyExgop5ZBo",
    "session_id": "f1TvRg8IVRyFmGNQuWHlyXV5YSiQm/za6NF2By5zcI0"
  },
  "event_id": "$1711135523111267Mtrpe:matrix.org",
  "origin_server_ts": 1611135523044,
  "sender": "@user:matrix.org",
  "type": "m.room.encrypted",
  "unsigned": {
    "age": 98,
    "transaction_id": "m1611135522895.70"
  },
  "room_id": "!pBNqtbBiFxFoDwLdsF:matrix.org"
}
```

In this data, the key `content.body` does not exist, there is no text in clear.

There are some new keys:

- `content.algorithm`, specifying which encryption algorithm as been used to encrypt the data of this message
- `content.ciphertext`, the text, content of our message (`content.body`, in non encrypted messages)
- `content.device_id`, which device (computer), of the user `sender` (@user:matrix.org), was used to send, and encrypt, this message
- `content.sender_key`, the user's key, that was used to encrypt this message.

Matrix, its clients and server implentation can offer this sort of
information and transparency to users. Because the code is open, it is
possible to learn and improve how things work.

### custom (encrypted) event message

The data stored under the `content.` keys of an event message, can be customized (by the developers/users).

It becomes therefore possible to use the Matrix systems to communicate
more than "just (encrypted) chats", and take advantages of its
features to build all sort of projects ([cerulean.matrix.org](https://cerulean.matrix.org/)).

# To sum up

When you use matrix, you protect your pricacy and the one of your
contacts.

It is using transparent technologies, methods and organisations, that
everyone can discuss, copy, improve and run on infrastructures that
they 100% own.

Just like an email address, a matrix user has a matrix address: `@user2:matrix.org` (`user2` on the server `matrix.org`, just like email `user2@matrix.org`).

A group, also has a matrix address, [#sctlib:matrix.org](https://app.element.io/#/room/#sctlib:matrix.org), which starts by `#` instead of `@` as for users.

A community can host their own matrix server (for free), or let the
people behind matrix do it for them, with [element-matrix-services](https://element.io/matrix-services).
For a list of known matrix server hosts: https://matrix.org/hosting


# matrix.to

To provide everyone with a choice in which client they use to
communicate on matrix, there is the website https://matrix.to

Enter the room or the user you want to share the address of, and it
will create for you a like that offers visitors the possibility to
decide in which client they want to open this communication chat.

For example, a sharable link created with matrix.to, will look like
this: https://matrix.to/#sctlib:matrix.org for linking to the room
`#sctlib:matrix.org`

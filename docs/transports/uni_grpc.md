---
id: uni_grpc
title: Unidirectional GRPC
sidebar_label: GRPC
---

It's possible to connect to GRPC unidirectional stream to consume real-time messages from Centrifugo. In this case you need to generate GRPC code for your language on client-side.

Protobuf definitions can be found here: TODO.

See a Go based example that connects to a server: TODO.

By default unidirectional GRPC endpoint is off, to enable it set:

```json title="config.json"
{
    ...
    "uni_grpc": true
}
```

GRPC server will start on port `11000` (default).

## Supported data formats

JSON and binary.
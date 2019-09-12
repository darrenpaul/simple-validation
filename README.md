# How to use

create an object that contains the following keys

value: string/float/int

valid: bool

validationType: string

required: bool

e.g.

firstName: {
value: "",
valid: false,
validationType: "name",
message: "",
required: true
}

this will then return

firstName: {
value: "",
valid: false,
validationType: "name",
message: "input required",
required: true
}

# Validation types

## name validation

type: string

minimum length: 2

maximum length: infinate

accepts symbols: false

accepts digits: false

## text validation

type: string

minimum length: 2

maximum length: infinate

accepts symbols: true

accepts digits: true

## message validation

type: string

minimum length: 2

maximum length: infinate

accepts symbols: true

accepts digits: true

## age validation

type: int

minimum length: 1

maximum length: 999

accepts symbols: false

accepts digits: false

## number validation

type: int

minimum length: 1

maximum length: infinate

accepts symbols: false

accepts digits: false

## email validation

type: string

minimum length: 1

maximum length: infinate

accepts symbols: true

accepts digits: true

## password validation

type: string

minimum length: 8

maximum length: infinate

accepts symbols: true

accepts digits: true

# Parse JSON/input

def parse_input(input: dict) -> str:
    if not 'body' in input:
        raise KeyError('Key "body" not found. Please enter valid input.')
    return input['body']
        
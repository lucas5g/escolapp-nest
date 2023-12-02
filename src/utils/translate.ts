export function translate(message: string) {
  const messages = {
    'users_unity_id_fkey (index)': 'unity_id',
  };

  return messages[message] ?? message;
}

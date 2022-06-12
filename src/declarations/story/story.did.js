export const idlFactory = ({ IDL }) => {
  const StoryText = IDL.Record({
    'title' : IDL.Text,
    'summary' : IDL.Text,
    'story' : IDL.Text,
    'address' : IDL.Opt(IDL.Text),
  });
  const Result_3 = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const StoryReturn = IDL.Record({
    'totalVotes' : IDL.Nat,
    'storyId' : IDL.Nat,
    'author' : IDL.Principal,
    'story' : StoryText,
  });
  const Result_2 = IDL.Variant({ 'ok' : StoryReturn, 'err' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : IDL.Vec(IDL.Nat), 'err' : IDL.Text });
  const StorySummary = IDL.Record({
    'title' : IDL.Text,
    'totalVotes' : IDL.Nat,
    'storyId' : IDL.Nat,
    'author' : IDL.Principal,
    'summary' : IDL.Text,
  });
  const Result_1 = IDL.Variant({ 'ok' : StorySummary, 'err' : IDL.Text });
  return IDL.Service({
    'add' : IDL.Func([StoryText], [Result_3], []),
    'adminDelete' : IDL.Func([IDL.Nat], [Result_3], []),
    'delete' : IDL.Func([IDL.Nat], [Result_3], []),
    'get' : IDL.Func([IDL.Nat], [Result_2], ['query']),
    'getDebug' : IDL.Func([], [IDL.Reserved], ['query']),
    'getMemorySize' : IDL.Func([], [IDL.Nat], ['query']),
    'getStoryIds' : IDL.Func([IDL.Nat], [Result], ['query']),
    'getSummary' : IDL.Func([IDL.Nat], [Result_1], ['query']),
    'getUserStories' : IDL.Func([IDL.Text], [Result], []),
    'whoami' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };

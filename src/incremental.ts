export const enum NodeKind {
  // Top-level nodes
  SourceFile,
  Program,

  // Element
  Block,
  VariableStatement,
  EmptyStatement,
  ExpressionStatement,
  IfStatement,
  DoStatement,
  WhileStatement,
  ForStatement,
  ForInStatement,
  ContinueStatement,
  BreakStatement,
  ReturnStatement,
  WithStatement,
  SwitchStatement,
  CaseClause,
  DefaultClause,
  LabeledStatement,
  ThrowStatement,
  TryStatement,
  TryBlock,
  CatchBlock,
  FinallyBlock,
  DebuggerStatement,
  VariableDeclaration,
  FunctionDeclaration,
  FunctionBlock,
  ClassDeclaration,
  InterfaceDeclaration,
  EnumDeclaration,
  ModuleDeclaration,
  ModuleBlock,
  ImportDeclaration,
  ExportAssignment
}
/* eslint-disable */
export default {
  name: 'llc',
  description: 'Creating the Limited Liability Company',
  start: 'single_1',
  kind: 'Form',
  attach: {
    NOTE_1: `
    <li>You can form a limited liability company (LLC) in any state, even if the LLC is not actually going to be conducting business there. However, you will be required to provide an address in the state of formation. If you want to use Delaware as the state of formation but do not have a Delaware address, there are services which will provide a registered agent address in Delaware that can accept service of process (lawsuits).</li>
    <li>In choosing the state of formation, keep in mind that your taxes and expenses will be affected by this choice. For example, if you form an LLC in Delaware, but the LLC conducts all of its business in California, the LLC will still be required to pay a $300 Delaware annual LLC tax (6 Del. Code §18-1107(b)) in addition to California LLC taxes. In addition, the LLC will be required to hire a registered agent in the State of Delaware at a cost of between $100 and $200 per year. If you form the LLC in California and the LLC conducts all of its business in California, it will not owe any Delaware taxes and one of its officers, owners or attorneys can serve as the California agent for service of process.</li>
    <li>On the other hand, a Delaware LLC provides the members (owners) of the LLC with greater protection against liabilities of the LLC than a California LLC.<br/>(Click <a class="lg-show-description" href="#link_1_1">here</a> for more information)<description id="link_1_1">{{LINK_1_1}}<a href="#">Close</a></description></li>
    `,
    LINK_1_1:
      'The law of the state of formation governs the liability of a member for the liabilities of the LLC. (Cal. Corp. Code §17708.01(a)(2)) Delaware provides owners of LLCs greater protection against Claw-Backs than does California. A “Claw-Back” is an order requiring a member of the LLC to return to the LLC or a creditor some or all of the distributions received by the member from the LLC. All states provide very strong protections for LLC members against the claims of creditors of the LLC, except in the case of claims for Claw-Backs. A “Post-Liquidation Claim” is a claim against the LLC that arises after liquidation. As a general rule, members of a California LLC are subject to Claw-Backs to pay Post Liquidation Claims, while members of a Delaware LLC are not. (See 6 Del. Code §§13-1304(a)(2)(b), 13-1305, and §18-804(c))) Specifically, California gives a creditor holding a Post-Liquidation Claim against a California LLC the right to collect such claim from a member of the LLC to the extent of any liquidating distributions received by the member from the LLC (Cal. Corp. Code §17707.07(a)(1)(B)). Delaware does not give such right to creditors holding Post-Liquidation Claims against Delaware LLCs. Thus, consider what happens if an LLC liquidates, makes a liquidating distribution of $1 million to its member or members and six months later receives a $1 million Post-Liquidation Claim. If the LLC were a California LLC, the creditor holding the $1 million Post-Liquidation Claim would be able to collect such claim from the LLC’s member or members up to the amount of their $1 million in liquidating distributions. However, if the LLC were a Delaware LLC, then the creditor would not be entitled to Claw-Back such funds from the LLC’s member or members so long as the LLC was solvent at the time of the liquidating distribution.',
  },
  step: 12,
  nodes: [
    {
      id: 'single_1',
      kind: 'Single',
      content: {
        question: 'In which state would you like to form your LLC?',
        fields: [
          { kind: 'choice', label: 'California', next: 'goto_0' },
          { kind: 'choice', label: 'Delaware', next: 'goto_1' },
        ],
        note: {
          title: 'State of Formation',
          attach: ['NOTE_1'],
        },
      },
    },
    {
      id: 'goto_0',
      kind: 'Goto',
      content: {
        kind: 'form',
        id: 'ca_llc',
      },
    },
    {
      id: 'goto_1',
      kind: 'Goto',
      content: {
        kind: 'form',
        id: 'de_llc',
      },
    },
  ],
}

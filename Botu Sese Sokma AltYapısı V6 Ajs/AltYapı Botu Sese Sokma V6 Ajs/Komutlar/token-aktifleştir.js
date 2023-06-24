module.exports = ({
          name: "ses",
          code: `
          $joinVC[$noMentionMessage[1]]
          $onlyIf[$noMentionMessage[1]!=;**!token-aktifleştir <#ses kanalı>**]`
});
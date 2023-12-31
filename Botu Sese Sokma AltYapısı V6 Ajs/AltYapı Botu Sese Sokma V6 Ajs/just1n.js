const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
//Main.js
const bot = new AoiClient({
    token: "token",
    prefix: ["!"],
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});
//SoundCloud & Youtube
const voice = new AoiVoice(bot, {
    searchOptions: {
        youtubeClient: "D9NPfM1bMer1amerPRPhaA",
        youtubegl: "TR",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});
// Memory & Disk
voice.addPlugin(PluginName.Cacher, new Cacher("memory"));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
}));

voice.bindExecutor(bot.functionManager.interpreter);
const { Util } = require("aoi.js"); 
const { setup } = require("aoi.parser");
setup(Util);
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./altyapı/Komutlar/")
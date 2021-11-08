const EMAIL_MAX_LEN = 255;
const EMAIL_MIN_LEN = 8;
// Regex should be according to RFC 822
// See http://rumkin.com/software/email/rules.php
// and http://badsyntax.co/post/javascript-email-validation-rfc822
// eslint-disable-next-line
const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const VALID_DOMAINS = new Set([
    'gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'hotmail.co.uk',
    'hotmail.fr', 'msn.com', 'yahoo.fr', 'wanadoo.fr', 'orange.fr',
    'comcast.net', 'yahoo.co.uk', 'yahoo.com.br', 'yahoo.co.in', 'live.com',
    'rediffmail.com', 'free.fr', 'gmx.de', 'web.de', 'yandex.ru', 'ymail.com',
    'libero.it', 'outlook.com', 'uol.com.br', 'bol.com.br', 'mail.ru',
    'cox.net', 'hotmail.it', 'sbcglobal.net', 'sfr.fr', 'live.fr',
    'verizon.net', 'live.co.uk', 'googlemail.com', 'yahoo.es', 'ig.com.br',
    'live.nl', 'bigpond.com', 'terra.com.br', 'yahoo.it', 'neuf.fr',
    'yahoo.de', 'alice.it', 'rocketmail.com', 'att.net', 'laposte.net',
    'facebook.com', 'bellsouth.net', 'yahoo.in', 'hotmail.es', 'charter.net',
    'yahoo.ca', 'yahoo.com.au', 'rambler.ru', 'hotmail.de', 'tiscali.it',
    'shaw.ca', 'yahoo.co.jp', 'sky.com', 'earthlink.net', 'optonline.net',
    'freenet.de', 't-online.de', 'aliceadsl.fr', 'virgilio.it', 'home.nl',
    'qq.com', 'telenet.be', 'me.com', 'yahoo.com.ar', 'tiscali.co.uk',
    'yahoo.com.mx', 'voila.fr', 'gmx.net', 'mail.com', 'planet.nl', 'tin.it',
    'live.it', 'ntlworld.com', 'arcor.de', 'yahoo.co.id', 'frontiernet.net',
    'hetnet.nl', 'live.com.au', 'yahoo.com.sg', 'zonnet.nl',
    'club-internet.fr', 'juno.com', 'optusnet.com.au', 'blueyonder.co.uk',
    'bluewin.ch', 'skynet.be', 'sympatico.ca', 'windstream.net', 'mac.com',
    'centurytel.net', 'chello.nl', 'live.ca', 'aim.com', 'bigpond.net.au',
    '163.com', '126.com', 'sina.com', 'foxmail.com', '139.com', 'sohu.com'
]);
const NON_VALID_DOMAINS = new Set([
    'avito.ru', 'avito-boxberry.ru', 'avito-dilivery.ru', 'avito-office.ru',
    'avito-package.ru', 'avito-payshops.ru', 'avito-repayment.online',
    'avito-safe.online', 'avito-save.online', 'avitoguard.online',
    'avitosafe.online', 'avitoexpress.online', 'corona-virus-live.ru',
    '0815.ru', '0wnd.net', '0wnd.org', '10minutemail.co.za',
    '10minutemail.com', '123-m.com', '1fsdfdsfsdf.tk', '1pad.de',
    '20minutemail.com', '21cn.com', '2fdgdfgdfgdf.tk', '2prong.com',
    '30minutemail.com', '33mail.com', '3trtretgfrfe.tk', '4gfdsgfdgfd.tk',
    '4warding.com', '5ghgfhfghfgh.tk', '6hjgjhgkilkj.tk', '6paq.com',
    '7tags.com', '9ox.net', 'a-bc.net', 'agedmail.com', 'ama-trade.de',
    'amilegit.com', 'amiri.net', 'amiriindustries.com', 'anonmails.de',
    'anonymbox.com', 'antichef.com', 'antichef.net', 'antireg.ru',
    'antispam.de', 'antispammail.de', 'armyspy.com', 'artman-conception.com',
    'azmeil.tk', 'baxomale.ht.cx', 'beefmilk.com', 'bigstring.com',
    'binkmail.com', 'bio-muesli.net', 'bobmail.info', 'bodhi.lawlita.com',
    'bofthew.com', 'bootybay.de', 'boun.cr', 'bouncr.com', 'breakthru.com',
    'brefmail.com', 'bsnow.net', 'bspamfree.org', 'bugmenot.com', 'bund.us',
    'burstmail.info', 'buymoreplays.com', 'byom.de', 'c2.hu', 'card.zp.ua',
    'casualdx.com', 'cek.pm', 'centermail.com', 'centermail.net',
    'chammy.info', 'childsavetrust.org', 'chogmail.com', 'choicemail1.com',
    'clixser.com', 'cmail.net', 'cmail.org', 'coldemail.info', 'cool.fr.nf',
    'courriel.fr.nf', 'courrieltemporaire.com', 'crapmail.org', 'cust.in',
    'cuvox.de', 'd3p.dk', 'dacoolest.com', 'dandikmail.com', 'dayrep.com',
    'dcemail.com', 'deadaddress.com', 'deadspam.com', 'delikkt.de',
    'despam.it', 'despammed.com', 'devnullmail.com', 'dfgh.net',
    'digitalsanctuary.com', 'dingbone.com', 'disposableaddress.com',
    'disposableemailaddresses.com', 'disposableinbox.com', 'dispose.it',
    'dispostable.com', 'dodgeit.com', 'dodgit.com', 'donemail.ru',
    'dontreg.com', 'dontsendmespam.de', 'drdrb.net', 'dump-email.info',
    'dumpandjunk.com', 'dumpyemail.com', 'e-mail.com', 'e-mail.org',
    'e4ward.com', 'easytrashmail.com', 'einmalmail.de', 'einrot.com',
    'eintagsmail.de', 'emailgo.de', 'emailias.com', 'emaillime.com',
    'emailsensei.com', 'emailtemporanea.com', 'emailtemporanea.net',
    'emailtemporar.ro', 'emailtemporario.com.br', 'emailthe.net',
    'emailtmp.com', 'emailwarden.com', 'emailx.at.hm', 'emailxfer.com',
    'emeil.in', 'emeil.ir', 'emz.net', 'ero-tube.org', 'evopo.com',
    'explodemail.com', 'express.net.ua', 'eyepaste.com', 'fakeinbox.com',
    'fakeinformation.com', 'fansworldwide.de', 'fantasymail.de',
    'fightallspam.com', 'filzmail.com', 'fivemail.de', 'fleckens.hu',
    'frapmail.com', 'friendlymail.co.uk', 'fuckingduh.com', 'fudgerub.com',
    'fyii.de', 'garliclife.com', 'gehensiemirnichtaufdensack.de',
    'get2mail.fr', 'getairmail.com', 'getmails.eu', 'getonemail.com',
    'giantmail.de', 'girlsundertheinfluence.com', 'gishpuppy.com', 'gmial.com',
    'goemailgo.com', 'gotmail.net', 'gotmail.org', 'gotti.otherinbox.com',
    'great-host.in', 'greensloth.com', 'grr.la', 'gsrv.co.uk',
    'guerillamail.biz', 'guerillamail.com', 'guerrillamail.biz',
    'guerrillamail.com', 'guerrillamail.de', 'guerrillamail.info',
    'guerrillamail.net', 'guerrillamail.org', 'guerrillamailblock.com',
    'gustr.com', 'harakirimail.com', 'hat-geld.de', 'hatespam.org',
    'herp.in', 'hidemail.de', 'hidzz.com', 'hmamail.com', 'hopemail.biz',
    'ieh-mail.de', 'ikbenspamvrij.nl', 'imails.info', 'inbax.tk', 'inbox.si',
    'inboxalias.com', 'inboxclean.com', 'inboxclean.org', 'infocom.zp.ua',
    'instant-mail.de', 'ip6.li', 'irish2me.com', 'iwi.net', 'jetable.com',
    'jetable.fr.nf', 'jetable.net', 'jetable.org', 'jnxjn.com',
    'jourrapide.com', 'jsrsolutions.com', 'kasmail.com', 'kaspop.com',
    'killmail.com', 'killmail.net', 'klassmaster.com', 'klzlk.com',
    'koszmail.pl', 'kurzepost.de', 'lawlita.com', 'letthemeatspam.com',
    'lhsdv.com', 'lifebyfood.com', 'link2mail.net', 'litedrop.com',
    'lol.ovpn.to', 'lolfreak.net', 'lookugly.com', 'lortemail.dk', 'lr78.com',
    'lroid.com', 'lukop.dk', 'm21.cc', 'mail-filter.com', 'mail-temporaire.fr',
    'mail.by', 'mail.mezimages.net', 'mail.zp.ua', 'mail1a.de', 'mail21.cc',
    'mail2rss.org', 'mail333.com', 'mailbidon.com', 'mailbiz.biz',
    'mailblocks.com', 'mailbucket.org', 'mailcat.biz', 'mailcatch.com',
    'mailde.de', 'mailde.info', 'maildrop.cc', 'maileimer.de',
    'mailexpire.com', 'mailfa.tk', 'mailforspam.com', 'mailfreeonline.com',
    'mailguard.me', 'mailin8r.com', 'mailinater.com', 'mailinator.com',
    'mailinator.net', 'mailinator.org', 'mailinator2.com', 'mailincubator.com',
    'mailismagic.com', 'mailme.lv', 'mailme24.com', 'mailmetrash.com',
    'mailmoat.com', 'mailms.com', 'mailnesia.com', 'mailnull.com',
    'mailorg.org', 'mailpick.biz', 'mailrock.biz', 'mailscrap.com',
    'mailshell.com', 'mailsiphon.com', 'mailtemp.info', 'mailtome.de',
    'mailtothis.com', 'mailtrash.net', 'mailtv.net', 'mailtv.tv',
    'mailzilla.com', 'makemetheking.com', 'manybrain.com', 'mbx.cc',
    'mega.zik.dj', 'meinspamschutz.de', 'meltmail.com', 'messagebeamer.de',
    'mezimages.net', 'ministry-of-silly-walks.de', 'mintemail.com',
    'misterpinball.de', 'moncourrier.fr.nf', 'monemail.fr.nf', 'monmail.fr.nf',
    'monumentmail.com', 'mt2009.com', 'mt2014.com', 'mycard.net.ua',
    'mycleaninbox.net', 'mymail-in.net', 'mypacks.net', 'mypartyclip.de',
    'myphantomemail.com', 'mysamp.de', 'mytempemail.com', 'mytempmail.com',
    'mytrashmail.com', 'nabuma.com', 'neomailbox.com', 'nepwk.com',
    'nervmich.net', 'nervtmich.net', 'netmails.com', 'netmails.net',
    'neverbox.com', 'nice-4u.com', 'nincsmail.hu', 'nnh.com', 'no-spam.ws',
    'noblepioneer.com', 'nomail.pw', 'nomail.xl.cx', 'nomail2me.com',
    'nomorespamemails.com', 'nospam.ze.tc', 'nospam4.us', 'nospamfor.us',
    'nospammail.net', 'notmailinator.com', 'nowhere.org', 'nowmymail.com',
    'nurfuerspam.de', 'nus.edu.sg', 'objectmail.com', 'obobbo.com',
    'odnorazovoe.ru', 'oneoffemail.com', 'onewaymail.com', 'onlatedotcom.info',
    'online.ms', 'opayq.com', 'ordinaryamerican.net', 'otherinbox.com',
    'ovpn.to', 'owlpic.com', 'pancakemail.com', 'pcusers.otherinbox.com',
    'pjjkp.com', 'plexolan.de', 'poczta.onet.pl', 'politikerclub.de',
    'poofy.org', 'pookmail.com', 'privacy.net', 'privatdemail.net',
    'proxymail.eu', 'prtnx.com', 'putthisinyourspamdatabase.com',
    'putthisinyourspamdatabase.com', 'qq.com', 'quickinbox.com',
    'rcpt.at', 'reallymymail.com', 'realtyalerts.ca', 'recode.me',
    'recursor.net', 'reliable-mail.com', 'rhyta.com', 'rmqkr.net', 'royal.net',
    'rtrtr.com', 's0ny.net', 'safe-mail.net', 'safersignup.de',
    'safetymail.info', 'safetypost.de', 'saynotospams.com', 'schafmail.de',
    'schrott-email.de', 'secretemail.de', 'secure-mail.biz',
    'senseless-entertainment.com', 'services391.com', 'sharklasers.com',
    'shieldemail.com', 'shiftmail.com', 'shitmail.me', 'shitware.nl',
    'shmeriously.com', 'shortmail.net', 'sibmail.com', 'sinnlos-mail.de',
    'slapsfromlastnight.com', 'slaskpost.se', 'smashmail.de', 'smellfear.com',
    'snakemail.com', 'sneakemail.com', 'sneakmail.de', 'snkmail.com',
    'sofimail.com', 'solvemail.info', 'sogetthis.com', 'soodonims.com',
    'spam4.me', 'spamail.de', 'spamarrest.com', 'spambob.net', 'spambog.ru',
    'spambox.us', 'spamcannon.com', 'spamcannon.net', 'spamcon.org',
    'spamcorptastic.com', 'spamcowboy.com', 'spamcowboy.net', 'spamcowboy.org',
    'spamday.com', 'spamex.com', 'spamfree.eu', 'spamfree24.com',
    'spamfree24.de', 'spamfree24.org', 'spamgoes.in', 'spamgourmet.com',
    'spamgourmet.net', 'spamgourmet.org', 'spamherelots.com',
    'spamherelots.com', 'spamhereplease.com', 'spamhereplease.com',
    'spamhole.com', 'spamify.com', 'spaml.de', 'spammotel.com',
    'spamobox.com', 'spamslicer.com', 'spamspot.com', 'spamthis.co.uk',
    'spamtroll.net', 'speed.1s.fr', 'spoofmail.de', 'stuffmail.de',
    'super-auswahl.de', 'supergreatmail.com', 'supermailer.jp',
    'superrito.com', 'superstachel.de', 'suremail.info', 'talkinator.com',
    'teewars.org', 'teleworm.com', 'teleworm.us', 'temp-mail.org',
    'temp-mail.ru', 'tempe-mail.com', 'tempemail.co.za', 'tempemail.com',
    'tempemail.net', 'tempemail.net', 'tempinbox.co.uk', 'tempinbox.com',
    'tempmail.eu', 'tempmaildemo.com', 'tempmailer.com', 'tempmailer.de',
    'tempomail.fr', 'temporaryemail.net', 'temporaryforwarding.com',
    'temporaryinbox.com', 'temporarymailaddress.com', 'tempthe.net',
    'thankyou2010.com', 'thc.st', 'thelimestones.com',
    'thisisnotmyrealemail.com', 'thismail.net', 'throwawayemailaddress.com',
    'tilien.com', 'tittbit.in', 'tizi.com', 'tmailinator.com', 'toomail.biz',
    'topranklist.de', 'tradermail.info', 'trash-mail.at', 'trash-mail.com',
    'trash-mail.de', 'trash2009.com', 'trashdevil.com', 'trashemail.de',
    'trashmail.at', 'trashmail.com', 'trashmail.de', 'trashmail.me',
    'trashmail.net', 'trashmail.org', 'trashymail.com', 'trialmail.de',
    'trillianpro.com', 'twinmail.de', 'tyldd.com', 'uggsrock.com', 'umail.net',
    'uroid.com', 'us.af', 'venompen.com', 'veryrealemail.com', 'viditag.com',
    'viralplays.com', 'vpn.st', 'vsimcard.com', 'vubby.com',
    'wasteland.rfc822.org', 'webemail.me', 'weg-werf-email.de',
    'wegwerf-emails.de', 'wegwerfadresse.de', 'wegwerfemail.com',
    'wegwerfemail.de', 'wegwerfmail.de', 'wegwerfmail.info', 'wegwerfmail.net',
    'wegwerfmail.org', 'wh4f.org', 'whyspam.me', 'willhackforfood.biz',
    'willselfdestruct.com', 'winemaven.info', 'wronghead.com',
    'www.e4ward.com', 'www.mailinator.com', 'wwwnew.eu', 'x.ip6.li',
    'xagloo.com', 'xemaps.com', 'xents.com', 'xmaily.com', 'xoxy.net',
    'yep.it', 'yogamaven.com', 'yopmail.com', 'yopmail.fr', 'yopmail.net',
    'yourdomain.com', 'yuurok.com', 'z1p.biz', 'za.com', 'zehnminuten.de',
    'zehnminutenmail.de', 'zippymail.info', 'zoemail.net', 'zomg.info'
]);
// from http://data.iana.org/TLD/tlds-alpha-by-domain.txt
const VALID_TLDS = new Set([
    'AAA',
    'AARP',
    'ABARTH',
    'ABB',
    'ABBOTT',
    'ABBVIE',
    'ABC',
    'ABLE',
    'ABOGADO',
    'ABUDHABI',
    'AC',
    'ACADEMY',
    'ACCENTURE',
    'ACCOUNTANT',
    'ACCOUNTANTS',
    'ACO',
    'ACTOR',
    'AD',
    'ADAC',
    'ADS',
    'ADULT',
    'AE',
    'AEG',
    'AERO',
    'AETNA',
    'AF',
    'AFAMILYCOMPANY',
    'AFL',
    'AFRICA',
    'AG',
    'AGAKHAN',
    'AGENCY',
    'AI',
    'AIG',
    'AIRBUS',
    'AIRFORCE',
    'AIRTEL',
    'AKDN',
    'AL',
    'ALFAROMEO',
    'ALIBABA',
    'ALIPAY',
    'ALLFINANZ',
    'ALLSTATE',
    'ALLY',
    'ALSACE',
    'ALSTOM',
    'AM',
    'AMAZON',
    'AMERICANEXPRESS',
    'AMERICANFAMILY',
    'AMEX',
    'AMFAM',
    'AMICA',
    'AMSTERDAM',
    'ANALYTICS',
    'ANDROID',
    'ANQUAN',
    'ANZ',
    'AO',
    'AOL',
    'APARTMENTS',
    'APP',
    'APPLE',
    'AQ',
    'AQUARELLE',
    'AR',
    'ARAB',
    'ARAMCO',
    'ARCHI',
    'ARMY',
    'ARPA',
    'ART',
    'ARTE',
    'AS',
    'ASDA',
    'ASIA',
    'ASSOCIATES',
    'AT',
    'ATHLETA',
    'ATTORNEY',
    'AU',
    'AUCTION',
    'AUDI',
    'AUDIBLE',
    'AUDIO',
    'AUSPOST',
    'AUTHOR',
    'AUTO',
    'AUTOS',
    'AVIANCA',
    'AW',
    'AWS',
    'AX',
    'AXA',
    'AZ',
    'AZURE',
    'BA',
    'BABY',
    'BAIDU',
    'BANAMEX',
    'BANANAREPUBLIC',
    'BAND',
    'BANK',
    'BAR',
    'BARCELONA',
    'BARCLAYCARD',
    'BARCLAYS',
    'BAREFOOT',
    'BARGAINS',
    'BASEBALL',
    'BASKETBALL',
    'BAUHAUS',
    'BAYERN',
    'BB',
    'BBC',
    'BBT',
    'BBVA',
    'BCG',
    'BCN',
    'BD',
    'BE',
    'BEATS',
    'BEAUTY',
    'BEER',
    'BENTLEY',
    'BERLIN',
    'BEST',
    'BESTBUY',
    'BET',
    'BF',
    'BG',
    'BH',
    'BHARTI',
    'BI',
    'BIBLE',
    'BID',
    'BIKE',
    'BING',
    'BINGO',
    'BIO',
    'BIZ',
    'BJ',
    'BLACK',
    'BLACKFRIDAY',
    'BLOCKBUSTER',
    'BLOG',
    'BLOOMBERG',
    'BLUE',
    'BM',
    'BMS',
    'BMW',
    'BN',
    'BNPPARIBAS',
    'BO',
    'BOATS',
    'BOEHRINGER',
    'BOFA',
    'BOM',
    'BOND',
    'BOO',
    'BOOK',
    'BOOKING',
    'BOSCH',
    'BOSTIK',
    'BOSTON',
    'BOT',
    'BOUTIQUE',
    'BOX',
    'BR',
    'BRADESCO',
    'BRIDGESTONE',
    'BROADWAY',
    'BROKER',
    'BROTHER',
    'BRUSSELS',
    'BS',
    'BT',
    'BUDAPEST',
    'BUGATTI',
    'BUILD',
    'BUILDERS',
    'BUSINESS',
    'BUY',
    'BUZZ',
    'BV',
    'BW',
    'BY',
    'BZ',
    'BZH',
    'CA',
    'CAB',
    'CAFE',
    'CAL',
    'CALL',
    'CALVINKLEIN',
    'CAM',
    'CAMERA',
    'CAMP',
    'CANCERRESEARCH',
    'CANON',
    'CAPETOWN',
    'CAPITAL',
    'CAPITALONE',
    'CAR',
    'CARAVAN',
    'CARDS',
    'CARE',
    'CAREER',
    'CAREERS',
    'CARS',
    'CASA',
    'CASE',
    'CASH',
    'CASINO',
    'CAT',
    'CATERING',
    'CATHOLIC',
    'CBA',
    'CBN',
    'CBRE',
    'CBS',
    'CC',
    'CD',
    'CENTER',
    'CEO',
    'CERN',
    'CF',
    'CFA',
    'CFD',
    'CG',
    'CH',
    'CHANEL',
    'CHANNEL',
    'CHARITY',
    'CHASE',
    'CHAT',
    'CHEAP',
    'CHINTAI',
    'CHRISTMAS',
    'CHROME',
    'CHURCH',
    'CI',
    'CIPRIANI',
    'CIRCLE',
    'CISCO',
    'CITADEL',
    'CITI',
    'CITIC',
    'CITY',
    'CITYEATS',
    'CK',
    'CL',
    'CLAIMS',
    'CLEANING',
    'CLICK',
    'CLINIC',
    'CLINIQUE',
    'CLOTHING',
    'CLOUD',
    'CLUB',
    'CLUBMED',
    'CM',
    'CN',
    'CO',
    'COACH',
    'CODES',
    'COFFEE',
    'COLLEGE',
    'COLOGNE',
    'COM',
    'COMCAST',
    'COMMBANK',
    'COMMUNITY',
    'COMPANY',
    'COMPARE',
    'COMPUTER',
    'COMSEC',
    'CONDOS',
    'CONSTRUCTION',
    'CONSULTING',
    'CONTACT',
    'CONTRACTORS',
    'COOKING',
    'COOKINGCHANNEL',
    'COOL',
    'COOP',
    'CORSICA',
    'COUNTRY',
    'COUPON',
    'COUPONS',
    'COURSES',
    'CPA',
    'CR',
    'CREDIT',
    'CREDITCARD',
    'CREDITUNION',
    'CRICKET',
    'CROWN',
    'CRS',
    'CRUISE',
    'CRUISES',
    'CSC',
    'CU',
    'CUISINELLA',
    'CV',
    'CW',
    'CX',
    'CY',
    'CYMRU',
    'CYOU',
    'CZ',
    'DABUR',
    'DAD',
    'DANCE',
    'DATA',
    'DATE',
    'DATING',
    'DATSUN',
    'DAY',
    'DCLK',
    'DDS',
    'DE',
    'DEAL',
    'DEALER',
    'DEALS',
    'DEGREE',
    'DELIVERY',
    'DELL',
    'DELOITTE',
    'DELTA',
    'DEMOCRAT',
    'DENTAL',
    'DENTIST',
    'DESI',
    'DESIGN',
    'DEV',
    'DHL',
    'DIAMONDS',
    'DIET',
    'DIGITAL',
    'DIRECT',
    'DIRECTORY',
    'DISCOUNT',
    'DISCOVER',
    'DISH',
    'DIY',
    'DJ',
    'DK',
    'DM',
    'DNP',
    'DO',
    'DOCS',
    'DOCTOR',
    'DOG',
    'DOMAINS',
    'DOT',
    'DOWNLOAD',
    'DRIVE',
    'DTV',
    'DUBAI',
    'DUCK',
    'DUNLOP',
    'DUPONT',
    'DURBAN',
    'DVAG',
    'DVR',
    'DZ',
    'EARTH',
    'EAT',
    'EC',
    'ECO',
    'EDEKA',
    'EDU',
    'EDUCATION',
    'EE',
    'EG',
    'EMAIL',
    'EMERCK',
    'ENERGY',
    'ENGINEER',
    'ENGINEERING',
    'ENTERPRISES',
    'EPSON',
    'EQUIPMENT',
    'ER',
    'ERICSSON',
    'ERNI',
    'ES',
    'ESQ',
    'ESTATE',
    'ET',
    'ETISALAT',
    'EU',
    'EUROVISION',
    'EUS',
    'EVENTS',
    'EXCHANGE',
    'EXPERT',
    'EXPOSED',
    'EXPRESS',
    'EXTRASPACE',
    'FAGE',
    'FAIL',
    'FAIRWINDS',
    'FAITH',
    'FAMILY',
    'FAN',
    'FANS',
    'FARM',
    'FARMERS',
    'FASHION',
    'FAST',
    'FEDEX',
    'FEEDBACK',
    'FERRARI',
    'FERRERO',
    'FI',
    'FIAT',
    'FIDELITY',
    'FIDO',
    'FILM',
    'FINAL',
    'FINANCE',
    'FINANCIAL',
    'FIRE',
    'FIRESTONE',
    'FIRMDALE',
    'FISH',
    'FISHING',
    'FIT',
    'FITNESS',
    'FJ',
    'FK',
    'FLICKR',
    'FLIGHTS',
    'FLIR',
    'FLORIST',
    'FLOWERS',
    'FLY',
    'FM',
    'FO',
    'FOO',
    'FOOD',
    'FOODNETWORK',
    'FOOTBALL',
    'FORD',
    'FOREX',
    'FORSALE',
    'FORUM',
    'FOUNDATION',
    'FOX',
    'FR',
    'FREE',
    'FRESENIUS',
    'FRL',
    'FROGANS',
    'FRONTDOOR',
    'FRONTIER',
    'FTR',
    'FUJITSU',
    'FUN',
    'FUND',
    'FURNITURE',
    'FUTBOL',
    'FYI',
    'GA',
    'GAL',
    'GALLERY',
    'GALLO',
    'GALLUP',
    'GAME',
    'GAMES',
    'GAP',
    'GARDEN',
    'GAY',
    'GB',
    'GBIZ',
    'GD',
    'GDN',
    'GE',
    'GEA',
    'GENT',
    'GENTING',
    'GEORGE',
    'GF',
    'GG',
    'GGEE',
    'GH',
    'GI',
    'GIFT',
    'GIFTS',
    'GIVES',
    'GIVING',
    'GL',
    'GLADE',
    'GLASS',
    'GLE',
    'GLOBAL',
    'GLOBO',
    'GM',
    'GMAIL',
    'GMBH',
    'GMO',
    'GMX',
    'GN',
    'GODADDY',
    'GOLD',
    'GOLDPOINT',
    'GOLF',
    'GOO',
    'GOODYEAR',
    'GOOG',
    'GOOGLE',
    'GOP',
    'GOT',
    'GOV',
    'GP',
    'GQ',
    'GR',
    'GRAINGER',
    'GRAPHICS',
    'GRATIS',
    'GREEN',
    'GRIPE',
    'GROCERY',
    'GROUP',
    'GS',
    'GT',
    'GU',
    'GUARDIAN',
    'GUCCI',
    'GUGE',
    'GUIDE',
    'GUITARS',
    'GURU',
    'GW',
    'GY',
    'HAIR',
    'HAMBURG',
    'HANGOUT',
    'HAUS',
    'HBO',
    'HDFC',
    'HDFCBANK',
    'HEALTH',
    'HEALTHCARE',
    'HELP',
    'HELSINKI',
    'HERE',
    'HERMES',
    'HGTV',
    'HIPHOP',
    'HISAMITSU',
    'HITACHI',
    'HIV',
    'HK',
    'HKT',
    'HM',
    'HN',
    'HOCKEY',
    'HOLDINGS',
    'HOLIDAY',
    'HOMEDEPOT',
    'HOMEGOODS',
    'HOMES',
    'HOMESENSE',
    'HONDA',
    'HORSE',
    'HOSPITAL',
    'HOST',
    'HOSTING',
    'HOT',
    'HOTELES',
    'HOTELS',
    'HOTMAIL',
    'HOUSE',
    'HOW',
    'HR',
    'HSBC',
    'HT',
    'HU',
    'HUGHES',
    'HYATT',
    'HYUNDAI',
    'IBM',
    'ICBC',
    'ICE',
    'ICU',
    'ID',
    'IE',
    'IEEE',
    'IFM',
    'IKANO',
    'IL',
    'IM',
    'IMAMAT',
    'IMDB',
    'IMMO',
    'IMMOBILIEN',
    'IN',
    'INC',
    'INDUSTRIES',
    'INFINITI',
    'INFO',
    'ING',
    'INK',
    'INSTITUTE',
    'INSURANCE',
    'INSURE',
    'INT',
    'INTERNATIONAL',
    'INTUIT',
    'INVESTMENTS',
    'IO',
    'IPIRANGA',
    'IQ',
    'IR',
    'IRISH',
    'IS',
    'ISMAILI',
    'IST',
    'ISTANBUL',
    'IT',
    'ITAU',
    'ITV',
    'JAGUAR',
    'JAVA',
    'JCB',
    'JE',
    'JEEP',
    'JETZT',
    'JEWELRY',
    'JIO',
    'JLL',
    'JM',
    'JMP',
    'JNJ',
    'JO',
    'JOBS',
    'JOBURG',
    'JOT',
    'JOY',
    'JP',
    'JPMORGAN',
    'JPRS',
    'JUEGOS',
    'JUNIPER',
    'KAUFEN',
    'KDDI',
    'KE',
    'KERRYHOTELS',
    'KERRYLOGISTICS',
    'KERRYPROPERTIES',
    'KFH',
    'KG',
    'KH',
    'KI',
    'KIA',
    'KIM',
    'KINDER',
    'KINDLE',
    'KITCHEN',
    'KIWI',
    'KM',
    'KN',
    'KOELN',
    'KOMATSU',
    'KOSHER',
    'KP',
    'KPMG',
    'KPN',
    'KR',
    'KRD',
    'KRED',
    'KUOKGROUP',
    'KW',
    'KY',
    'KYOTO',
    'KZ',
    'LA',
    'LACAIXA',
    'LAMBORGHINI',
    'LAMER',
    'LANCASTER',
    'LANCIA',
    'LAND',
    'LANDROVER',
    'LANXESS',
    'LASALLE',
    'LAT',
    'LATINO',
    'LATROBE',
    'LAW',
    'LAWYER',
    'LB',
    'LC',
    'LDS',
    'LEASE',
    'LECLERC',
    'LEFRAK',
    'LEGAL',
    'LEGO',
    'LEXUS',
    'LGBT',
    'LI',
    'LIDL',
    'LIFE',
    'LIFEINSURANCE',
    'LIFESTYLE',
    'LIGHTING',
    'LIKE',
    'LILLY',
    'LIMITED',
    'LIMO',
    'LINCOLN',
    'LINDE',
    'LINK',
    'LIPSY',
    'LIVE',
    'LIVING',
    'LIXIL',
    'LK',
    'LLC',
    'LLP',
    'LOAN',
    'LOANS',
    'LOCKER',
    'LOCUS',
    'LOFT',
    'LOL',
    'LONDON',
    'LOTTE',
    'LOTTO',
    'LOVE',
    'LPL',
    'LPLFINANCIAL',
    'LR',
    'LS',
    'LT',
    'LTD',
    'LTDA',
    'LU',
    'LUNDBECK',
    'LUXE',
    'LUXURY',
    'LV',
    'LY',
    'MA',
    'MACYS',
    'MADRID',
    'MAIF',
    'MAISON',
    'MAKEUP',
    'MAN',
    'MANAGEMENT',
    'MANGO',
    'MAP',
    'MARKET',
    'MARKETING',
    'MARKETS',
    'MARRIOTT',
    'MARSHALLS',
    'MASERATI',
    'MATTEL',
    'MBA',
    'MC',
    'MCKINSEY',
    'MD',
    'ME',
    'MED',
    'MEDIA',
    'MEET',
    'MELBOURNE',
    'MEME',
    'MEMORIAL',
    'MEN',
    'MENU',
    'MERCKMSD',
    'MG',
    'MH',
    'MIAMI',
    'MICROSOFT',
    'MIL',
    'MINI',
    'MINT',
    'MIT',
    'MITSUBISHI',
    'MK',
    'ML',
    'MLB',
    'MLS',
    'MM',
    'MMA',
    'MN',
    'MO',
    'MOBI',
    'MOBILE',
    'MODA',
    'MOE',
    'MOI',
    'MOM',
    'MONASH',
    'MONEY',
    'MONSTER',
    'MORMON',
    'MORTGAGE',
    'MOSCOW',
    'MOTO',
    'MOTORCYCLES',
    'MOV',
    'MOVIE',
    'MP',
    'MQ',
    'MR',
    'MS',
    'MSD',
    'MT',
    'MTN',
    'MTR',
    'MU',
    'MUSEUM',
    'MUTUAL',
    'MV',
    'MW',
    'MX',
    'MY',
    'MZ',
    'NA',
    'NAB',
    'NAGOYA',
    'NAME',
    'NATURA',
    'NAVY',
    'NBA',
    'NC',
    'NE',
    'NEC',
    'NET',
    'NETBANK',
    'NETFLIX',
    'NETWORK',
    'NEUSTAR',
    'NEW',
    'NEWS',
    'NEXT',
    'NEXTDIRECT',
    'NEXUS',
    'NF',
    'NFL',
    'NG',
    'NGO',
    'NHK',
    'NI',
    'NICO',
    'NIKE',
    'NIKON',
    'NINJA',
    'NISSAN',
    'NISSAY',
    'NL',
    'NO',
    'NOKIA',
    'NORTHWESTERNMUTUAL',
    'NORTON',
    'NOW',
    'NOWRUZ',
    'NOWTV',
    'NP',
    'NR',
    'NRA',
    'NRW',
    'NTT',
    'NU',
    'NYC',
    'NZ',
    'OBI',
    'OBSERVER',
    'OFF',
    'OFFICE',
    'OKINAWA',
    'OLAYAN',
    'OLAYANGROUP',
    'OLDNAVY',
    'OLLO',
    'OM',
    'OMEGA',
    'ONE',
    'ONG',
    'ONL',
    'ONLINE',
    'OOO',
    'OPEN',
    'ORACLE',
    'ORANGE',
    'ORG',
    'ORGANIC',
    'ORIGINS',
    'OSAKA',
    'OTSUKA',
    'OTT',
    'OVH',
    'PA',
    'PAGE',
    'PANASONIC',
    'PARIS',
    'PARS',
    'PARTNERS',
    'PARTS',
    'PARTY',
    'PASSAGENS',
    'PAY',
    'PCCW',
    'PE',
    'PET',
    'PF',
    'PFIZER',
    'PG',
    'PH',
    'PHARMACY',
    'PHD',
    'PHILIPS',
    'PHONE',
    'PHOTO',
    'PHOTOGRAPHY',
    'PHOTOS',
    'PHYSIO',
    'PICS',
    'PICTET',
    'PICTURES',
    'PID',
    'PIN',
    'PING',
    'PINK',
    'PIONEER',
    'PIZZA',
    'PK',
    'PL',
    'PLACE',
    'PLAY',
    'PLAYSTATION',
    'PLUMBING',
    'PLUS',
    'PM',
    'PN',
    'PNC',
    'POHL',
    'POKER',
    'POLITIE',
    'PORN',
    'POST',
    'PR',
    'PRAMERICA',
    'PRAXI',
    'PRESS',
    'PRIME',
    'PRO',
    'PROD',
    'PRODUCTIONS',
    'PROF',
    'PROGRESSIVE',
    'PROMO',
    'PROPERTIES',
    'PROPERTY',
    'PROTECTION',
    'PRU',
    'PRUDENTIAL',
    'PS',
    'PT',
    'PUB',
    'PW',
    'PWC',
    'PY',
    'QA',
    'QPON',
    'QUEBEC',
    'QUEST',
    'QVC',
    'RACING',
    'RADIO',
    'RAID',
    'RE',
    'READ',
    'REALESTATE',
    'REALTOR',
    'REALTY',
    'RECIPES',
    'RED',
    'REDSTONE',
    'REDUMBRELLA',
    'REHAB',
    'REISE',
    'REISEN',
    'REIT',
    'RELIANCE',
    'REN',
    'RENT',
    'RENTALS',
    'REPAIR',
    'REPORT',
    'REPUBLICAN',
    'REST',
    'RESTAURANT',
    'REVIEW',
    'REVIEWS',
    'REXROTH',
    'RICH',
    'RICHARDLI',
    'RICOH',
    'RIL',
    'RIO',
    'RIP',
    'RMIT',
    'RO',
    'ROCHER',
    'ROCKS',
    'RODEO',
    'ROGERS',
    'ROOM',
    'RS',
    'RSVP',
    'RU',
    'RUGBY',
    'RUHR',
    'RUN',
    'RW',
    'RWE',
    'RYUKYU',
    'SA',
    'SAARLAND',
    'SAFE',
    'SAFETY',
    'SAKURA',
    'SALE',
    'SALON',
    'SAMSCLUB',
    'SAMSUNG',
    'SANDVIK',
    'SANDVIKCOROMANT',
    'SANOFI',
    'SAP',
    'SARL',
    'SAS',
    'SAVE',
    'SAXO',
    'SB',
    'SBI',
    'SBS',
    'SC',
    'SCA',
    'SCB',
    'SCHAEFFLER',
    'SCHMIDT',
    'SCHOLARSHIPS',
    'SCHOOL',
    'SCHULE',
    'SCHWARZ',
    'SCIENCE',
    'SCJOHNSON',
    'SCOT',
    'SD',
    'SE',
    'SEARCH',
    'SEAT',
    'SECURE',
    'SECURITY',
    'SEEK',
    'SELECT',
    'SENER',
    'SERVICES',
    'SES',
    'SEVEN',
    'SEW',
    'SEX',
    'SEXY',
    'SFR',
    'SG',
    'SH',
    'SHANGRILA',
    'SHARP',
    'SHAW',
    'SHELL',
    'SHIA',
    'SHIKSHA',
    'SHOES',
    'SHOP',
    'SHOPPING',
    'SHOUJI',
    'SHOW',
    'SHOWTIME',
    'SI',
    'SILK',
    'SINA',
    'SINGLES',
    'SITE',
    'SJ',
    'SK',
    'SKI',
    'SKIN',
    'SKY',
    'SKYPE',
    'SL',
    'SLING',
    'SM',
    'SMART',
    'SMILE',
    'SN',
    'SNCF',
    'SO',
    'SOCCER',
    'SOCIAL',
    'SOFTBANK',
    'SOFTWARE',
    'SOHU',
    'SOLAR',
    'SOLUTIONS',
    'SONG',
    'SONY',
    'SOY',
    'SPA',
    'SPACE',
    'SPORT',
    'SPOT',
    'SR',
    'SRL',
    'SS',
    'ST',
    'STADA',
    'STAPLES',
    'STAR',
    'STATEBANK',
    'STATEFARM',
    'STC',
    'STCGROUP',
    'STOCKHOLM',
    'STORAGE',
    'STORE',
    'STREAM',
    'STUDIO',
    'STUDY',
    'STYLE',
    'SU',
    'SUCKS',
    'SUPPLIES',
    'SUPPLY',
    'SUPPORT',
    'SURF',
    'SURGERY',
    'SUZUKI',
    'SV',
    'SWATCH',
    'SWIFTCOVER',
    'SWISS',
    'SX',
    'SY',
    'SYDNEY',
    'SYSTEMS',
    'SZ',
    'TAB',
    'TAIPEI',
    'TALK',
    'TAOBAO',
    'TARGET',
    'TATAMOTORS',
    'TATAR',
    'TATTOO',
    'TAX',
    'TAXI',
    'TC',
    'TCI',
    'TD',
    'TDK',
    'TEAM',
    'TECH',
    'TECHNOLOGY',
    'TEL',
    'TEMASEK',
    'TENNIS',
    'TEVA',
    'TF',
    'TG',
    'TH',
    'THD',
    'THEATER',
    'THEATRE',
    'TIAA',
    'TICKETS',
    'TIENDA',
    'TIFFANY',
    'TIPS',
    'TIRES',
    'TIROL',
    'TJ',
    'TJMAXX',
    'TJX',
    'TK',
    'TKMAXX',
    'TL',
    'TM',
    'TMALL',
    'TN',
    'TO',
    'TODAY',
    'TOKYO',
    'TOOLS',
    'TOP',
    'TORAY',
    'TOSHIBA',
    'TOTAL',
    'TOURS',
    'TOWN',
    'TOYOTA',
    'TOYS',
    'TR',
    'TRADE',
    'TRADING',
    'TRAINING',
    'TRAVEL',
    'TRAVELCHANNEL',
    'TRAVELERS',
    'TRAVELERSINSURANCE',
    'TRUST',
    'TRV',
    'TT',
    'TUBE',
    'TUI',
    'TUNES',
    'TUSHU',
    'TV',
    'TVS',
    'TW',
    'TZ',
    'UA',
    'UBANK',
    'UBS',
    'UG',
    'UK',
    'UNICOM',
    'UNIVERSITY',
    'UNO',
    'UOL',
    'UPS',
    'US',
    'UY',
    'UZ',
    'VA',
    'VACATIONS',
    'VANA',
    'VANGUARD',
    'VC',
    'VE',
    'VEGAS',
    'VENTURES',
    'VERISIGN',
    'VERSICHERUNG',
    'VET',
    'VG',
    'VI',
    'VIAJES',
    'VIDEO',
    'VIG',
    'VIKING',
    'VILLAS',
    'VIN',
    'VIP',
    'VIRGIN',
    'VISA',
    'VISION',
    'VIVA',
    'VIVO',
    'VLAANDEREN',
    'VN',
    'VODKA',
    'VOLKSWAGEN',
    'VOLVO',
    'VOTE',
    'VOTING',
    'VOTO',
    'VOYAGE',
    'VU',
    'VUELOS',
    'WALES',
    'WALMART',
    'WALTER',
    'WANG',
    'WANGGOU',
    'WATCH',
    'WATCHES',
    'WEATHER',
    'WEATHERCHANNEL',
    'WEBCAM',
    'WEBER',
    'WEBSITE',
    'WED',
    'WEDDING',
    'WEIBO',
    'WEIR',
    'WF',
    'WHOSWHO',
    'WIEN',
    'WIKI',
    'WILLIAMHILL',
    'WIN',
    'WINDOWS',
    'WINE',
    'WINNERS',
    'WME',
    'WOLTERSKLUWER',
    'WOODSIDE',
    'WORK',
    'WORKS',
    'WORLD',
    'WOW',
    'WS',
    'WTC',
    'WTF',
    'XBOX',
    'XEROX',
    'XFINITY',
    'XIHUAN',
    'XIN',
    'XN--11B4C3D',
    'XN--1CK2E1B',
    'XN--1QQW23A',
    'XN--2SCRJ9C',
    'XN--30RR7Y',
    'XN--3BST00M',
    'XN--3DS443G',
    'XN--3E0B707E',
    'XN--3HCRJ9C',
    'XN--3OQ18VL8PN36A',
    'XN--3PXU8K',
    'XN--42C2D9A',
    'XN--45BR5CYL',
    'XN--45BRJ9C',
    'XN--45Q11C',
    'XN--4DBRK0CE',
    'XN--4GBRIM',
    'XN--54B7FTA0CC',
    'XN--55QW42G',
    'XN--55QX5D',
    'XN--5SU34J936BGSG',
    'XN--5TZM5G',
    'XN--6FRZ82G',
    'XN--6QQ986B3XL',
    'XN--80ADXHKS',
    'XN--80AO21A',
    'XN--80AQECDR1A',
    'XN--80ASEHDB',
    'XN--80ASWG',
    'XN--8Y0A063A',
    'XN--90A3AC',
    'XN--90AE',
    'XN--90AIS',
    'XN--9DBQ2A',
    'XN--9ET52U',
    'XN--9KRT00A',
    'XN--B4W605FERD',
    'XN--BCK1B9A5DRE4C',
    'XN--C1AVG',
    'XN--C2BR7G',
    'XN--CCK2B3B',
    'XN--CCKWCXETD',
    'XN--CG4BKI',
    'XN--CLCHC0EA0B2G2A9GCD',
    'XN--CZR694B',
    'XN--CZRS0T',
    'XN--CZRU2D',
    'XN--D1ACJ3B',
    'XN--D1ALF',
    'XN--E1A4C',
    'XN--ECKVDTC9D',
    'XN--EFVY88H',
    'XN--FCT429K',
    'XN--FHBEI',
    'XN--FIQ228C5HS',
    'XN--FIQ64B',
    'XN--FIQS8S',
    'XN--FIQZ9S',
    'XN--FJQ720A',
    'XN--FLW351E',
    'XN--FPCRJ9C3D',
    'XN--FZC2C9E2C',
    'XN--FZYS8D69UVGM',
    'XN--G2XX48C',
    'XN--GCKR3F0F',
    'XN--GECRJ9C',
    'XN--GK3AT1E',
    'XN--H2BREG3EVE',
    'XN--H2BRJ9C',
    'XN--H2BRJ9C8C',
    'XN--HXT814E',
    'XN--I1B6B1A6A2E',
    'XN--IMR513N',
    'XN--IO0A7I',
    'XN--J1AEF',
    'XN--J1AMH',
    'XN--J6W193G',
    'XN--JLQ480N2RG',
    'XN--JLQ61U9W7B',
    'XN--JVR189M',
    'XN--KCRX77D1X4A',
    'XN--KPRW13D',
    'XN--KPRY57D',
    'XN--KPUT3I',
    'XN--L1ACC',
    'XN--LGBBAT1AD8J',
    'XN--MGB9AWBF',
    'XN--MGBA3A3EJT',
    'XN--MGBA3A4F16A',
    'XN--MGBA7C0BBN0A',
    'XN--MGBAAKC7DVF',
    'XN--MGBAAM7A8H',
    'XN--MGBAB2BD',
    'XN--MGBAH1A3HJKRD',
    'XN--MGBAI9AZGQP6J',
    'XN--MGBAYH7GPA',
    'XN--MGBBH1A',
    'XN--MGBBH1A71E',
    'XN--MGBC0A9AZCG',
    'XN--MGBCA7DZDO',
    'XN--MGBCPQ6GPA1A',
    'XN--MGBERP4A5D4AR',
    'XN--MGBGU82A',
    'XN--MGBI4ECEXP',
    'XN--MGBPL2FH',
    'XN--MGBT3DHD',
    'XN--MGBTX2B',
    'XN--MGBX4CD0AB',
    'XN--MIX891F',
    'XN--MK1BU44C',
    'XN--MXTQ1M',
    'XN--NGBC5AZD',
    'XN--NGBE9E0A',
    'XN--NGBRX',
    'XN--NODE',
    'XN--NQV7F',
    'XN--NQV7FS00EMA',
    'XN--NYQY26A',
    'XN--O3CW4H',
    'XN--OGBPF8FL',
    'XN--OTU796D',
    'XN--P1ACF',
    'XN--P1AI',
    'XN--PGBS0DH',
    'XN--PSSY2U',
    'XN--Q7CE6A',
    'XN--Q9JYB4C',
    'XN--QCKA1PMC',
    'XN--QXA6A',
    'XN--QXAM',
    'XN--RHQV96G',
    'XN--ROVU88B',
    'XN--RVC1E0AM3E',
    'XN--S9BRJ9C',
    'XN--SES554G',
    'XN--T60B56A',
    'XN--TCKWE',
    'XN--TIQ49XQYJ',
    'XN--UNUP4Y',
    'XN--VERMGENSBERATER-CTB',
    'XN--VERMGENSBERATUNG-PWB',
    'XN--VHQUV',
    'XN--VUQ861B',
    'XN--W4R85EL8FHU5DNRA',
    'XN--W4RS40L',
    'XN--WGBH1C',
    'XN--WGBL6A',
    'XN--XHQ521B',
    'XN--XKC2AL3HYE2A',
    'XN--XKC2DL3A5EE0H',
    'XN--Y9A3AQ',
    'XN--YFRO4I67O',
    'XN--YGBI2AMMX',
    'XN--ZFR164B',
    'XXX',
    'XYZ',
    'YACHTS',
    'YAHOO',
    'YAMAXUN',
    'YANDEX',
    'YE',
    'YODOBASHI',
    'YOGA',
    'YOKOHAMA',
    'YOU',
    'YOUTUBE',
    'YT',
    'YUN',
    'ZA',
    'ZAPPOS',
    'ZARA',
    'ZERO',
    'ZIP',
    'ZM',
    'ZONE',
    'ZUERICH',
    'ZW'
]);

export const validateEmail = (email, testDomain) => {
    // make sure it's all ascii-text
    if (/[^\x00-x7F]/.test(email)) {
        return false;
    }
    const parts = email.split('@');
    if (parts.length !== 2) {
        return false;
    }
    const domain = parts[1].toLowerCase();
    // our acceptable domains must start with an alphanumeric character
    if (/[^a-zA-Z0-9]/.test(domain[0])) {
        return false;
    }
    if (testDomain &&
        !VALID_DOMAINS.has(domain) ||
        NON_VALID_DOMAINS.has(domain)) {
        return false;
    }
    else {
        // at least check the TLD
        const tld = domain.split('.').splice(-1)[0].toUpperCase();
        if (!VALID_TLDS.has(tld)) {
            return false;
        }
    }
    const len = email.length;
    return EMAIL_REGEXP.test(email) &&
        !(len > EMAIL_MAX_LEN || len < EMAIL_MIN_LEN ||
            email[0] === '.' || email[len - 1] === '.');
};

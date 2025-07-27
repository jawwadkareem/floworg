"use client"

import type React from "react"
import { motion } from "framer-motion"

const TermsSection: React.FC = () => {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm leading-relaxed text-gray-700 space-y-4"
        >
          <p className="mb-4">
            The website located at www.Floworg360.com (the <strong>"Site"</strong>) is a copyrighted work belonging to
            Floworg, Ltd. (<strong>"Company"</strong>, <strong>"us"</strong>, <strong>"our"</strong>, and{" "}
            <strong>"we"</strong>). Certain features of the Site may be subject to additional guidelines, terms, or
            rules, which will be posted on the Site in connection with such features. All such additional terms,
            guidelines, and rules are incorporated by reference into these Terms.
          </p>

          <p className="mb-4">
            These Terms of Use (these <strong>"Terms"</strong>) set forth the legally binding terms and conditions that
            govern your use of the Site. By accessing or using the Site, you are accepting these Terms (on behalf of
            yourself or the entity that you represent), and you represent and warrant that you have the right,
            authority, and capacity to enter into these Terms (on behalf of yourself or the entity that you represent).
            you may not access or use the Site or accept the Terms if you are not at least 18 years old. If you do not
            agree with all of the provisions of these Terms, do not access and/or use the Site.
          </p>

          <p className="mb-4 font-semibold text-gray-900">
            PLEASE BE AWARE THAT SECTION 10.2 CONTAINS PROVISIONS GOVERNING HOW TO RESOLVE DISPUTES BETWEEN YOU AND
            COMPANY. AMONG OTHER THINGS, SECTION 10.2 INCLUDES AN AGREEMENT TO ARBITRATE WHICH REQUIRES, WITH LIMITED
            EXCEPTIONS, THAT ALL DISPUTES BETWEEN YOU AND US SHALL BE RESOLVED BY BINDING AND FINAL ARBITRATION. SECTION
            10.2 ALSO CONTAINS A CLASS ACTION AND JURY TRIAL WAIVER. PLEASE READ SECTION 10.2 CAREFULLY.
          </p>

          <p className="mb-6 font-semibold text-gray-900">
            UNLESS YOU OPT OUT OF THE AGREEMENT TO ARBITRATE WITHIN 30 DAYS: (1) YOU WILL ONLY BE PERMITTED TO PURSUE
            DISPUTES OR CLAIMS AND SEEK RELIEF AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER IN
            ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION
            LAWSUIT OR CLASS-WIDE ARBITRATION; AND (2) YOU ARE WAIVING YOUR RIGHT TO PURSUE DISPUTES OR CLAIMS AND SEEK
            RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL.
          </p>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900">1. Accounts</h3>

            <div className="ml-4 space-y-3">
              <p>
                <strong>Account Creation.</strong> In order to use certain features of the Site, you must register for
                an account (<strong>"Account"</strong>) and provide certain information about yourself as prompted by
                the account registration form. You represent and warrant that: (a) all required registration information
                you submit is truthful and accurate; (b) you will maintain the accuracy of such information. You may
                delete your Account at any time, for any reason, by following the instructions on the Site. Company may
                suspend or terminate your Account in accordance with Section
              </p>

              <p>
                <strong>Account Responsibilities.</strong> You are responsible for maintaining the confidentiality of
                your Account login information and are fully responsible for all activities that occur under your
                Account. You agree to immediately notify Company of any unauthorized use, or suspected unauthorized use
                of your Account or any other breach of security. Company cannot and will not be liable for any loss or
                damage arising from your failure to comply with the above requirements.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900">2. Access to the Site</h3>

            <div className="ml-4 space-y-3">
              <p>
                Subject to these Terms, Company grants you a non-transferable, non-exclusive, revocable, limited license
                to use and access the Site solely for your own personal, noncommercial use.
              </p>

              <p>
                <strong>Certain Restrictions.</strong> The rights granted to you in these Terms are subject to the
                following restrictions: (a) you shall not license, sell, rent, lease, transfer, assign, distribute,
                host, or otherwise commercially exploit the Site, whether in whole or in part, or any content displayed
                on the Site; (b) you shall not modify, make derivative works of, disassemble, reverse compile or reverse
                engineer any part of the Site; (c) you shall not access the Site in order to build a similar or
                competitive website, product, or service; and (d) except as expressly stated herein, no part of the Site
                may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any
                form or by any means. Unless otherwise indicated, any future release, update, or other addition to
                functionality of the Site shall be subject to these Terms. All copyright and other proprietary notices
                on the Site (or on any content displayed on the Site) must be retained on all copies thereof.
              </p>

              <p>
                Company reserves the right, at any time, to modify, suspend, or discontinue the Site (in whole or in part) with or without notice to you. You agree that Company will not be liable to you or to any third party for any modification, suspension, or discontinuation of the Site or any part thereof.
              </p>
              <p>
                <b>No Support or Maintenance.</b> You acknowledge and agree that Company will have no obligation to provide you with any support or maintenance in connection with the Site.
              </p>
              <p>
                Excluding any User Content that you may provide (defined below), you acknowledge that all the intellectual property rights, including copyrights, patents, trade marks, and trade secrets, in the Site and its content are owned by Company or Company’s suppliers. Neither these Terms (nor your access to the Site) transfers to you or any third party any rights, title or interest in or to such intellectual property rights, except for the limited access rights expressly set forth in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms. There are no implied licenses granted under these Terms.
              </p>
              <p>
                If you provide Company with any feedback or suggestions regarding the Site (<b>"Feedback"</b>), you hereby assign to Company all rights in such Feedback and agree that Company shall have the right to use and fully exploit such Feedback and related information in any manner it deems appropriate. Company will treat any Feedback you provide to Company as non-confidential and non-proprietary. You agree that you will not submit to Company any information or ideas that you consider to be confidential or proprietary.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold text-gray-900">3. User Content</h3>

            <div className="ml-4 space-y-3">
              <p>
                <strong>User Content.</strong> <strong>"User Content"</strong> means any and all information and content
                that a user submits to, or uses with, the Site (e.g., content in the user's profile or postings). You
                are solely responsible for your User Content. You assume all risks associated with use of your User
                Content, including any reliance on its accuracy, completeness or usefulness by others, or any disclosure
                of your User Content that personally identifies you or any third party. You hereby represent and warrant
                that your User Content does not violate our Acceptable Use Policy (defined in Section 3). You may not
                represent or imply to others that your User Content is in any way provided, sponsored or endorsed by
                Company. Since you alone are responsible for your User Content, you may expose yourself to liability if,
                for example, your User Content violates the Acceptable Use Policy. Company is not obligated to backup
                any User Content, and your User Content may be deleted at any time without prior notice. You are solely
                responsible for creating and maintaining your own backup copies of your User Content if you desire.
              </p>

              <p>
                You hereby grant (and you represent and warrant that you have the right to grant) to Company an
                irrevocable, nonexclusive, royalty-free and fully paid, worldwide license to reproduce, distribute,
                publicly display and perform, prepare derivative works of, incorporate into other works, and otherwise
                use and exploit your User Content, and to grant sublicenses of the foregoing rights, solely for the
                purposes of including your User Content in the Site. You hereby irrevocably waive (and agree to cause to
                be waived) any claims and assertions of moral rights or attribution with respect to your User Content.
              </p>

              <p>
                <strong>Acceptable Use Policy.</strong> The following terms constitute our{" "}
                <strong>"Acceptable Use Policy"</strong>:
              </p>

              <p className="ml-4">
                You agree not to use the Site to collect, upload, transmit, display, or distribute any User Content (i)
                that violates any third-party right, including any copyright, trademark, patent, trade secret, moral
                right, privacy right, right of publicity, or any other intellectual property or proprietary right; (ii)
                that is unlawful, harassing, abusive, tortious, threatening, harmful, invasive of another's privacy,
                vulgar, defamatory, false, intentionally misleading, trade libelous, pornographic, obscene, patently
                offensive, promotes racism, bigotry, hatred, or physical harm of any kind against any group or
                individual or is otherwise objectionable; (iii) that is harmful to minors in any way; or (iv) that is in
                violation of any law, regulation, or obligations or restrictions imposed by any third party.
              </p>
            </div>
          </div>

          <div className="space-y-3 ml-4">
            <p>
              including e-mail addresses, without their consent; (iv) interfere with, disrupt, or create an undue burden
              on servers or networks connected to the Site, or violate the regulations, policies or procedures of such
              networks; (v) attempt to gain unauthorized access to the Site (or to other computer systems or networks
              connected to or used together with the Site), whether through password mining or any other means; (vi)
              harass or interfere with any other user's use and enjoyment of the Site; or (vii) use software or
              automated agents or scripts to produce multiple accounts on the Site, or to generate automated searches,
              requests, or queries to (or to strip, scrape, or mine data from) the Site (provided, however, that we
              conditionally grant to the operators of public search engines revocable permission to use spiders to copy
              materials from the Site for the sole purpose of and solely to the extent necessary for creating publicly
              available searchable indices of the materials, but not caches or archives of such materials, subject to
              the parameters set forth in our robots.txt file).
            </p>

            <p>
              We reserve the right (but have no obligation) to review, refuse and/or remove any User Content in our sole
              discretion, and to investigate and/or take appropriate action against you in our sole discretion if you
              violate the Acceptable Use Policy or any other provision of these Terms or otherwise create liability for
              us or any other person. Such action may include removing or modifying your User Content, terminating your
              Account in accordance with Section 8, and/or reporting you to law enforcement authorities.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              <strong>4.</strong> You agree to indemnify and hold Company (and its officers, employees, and agents)
              harmless, including costs and attorneys' fees, from any claim or demand made by any third party due to or
              arising out of (a) your use of the Site, (b) your violation of these Terms, (c) your violation of
              applicable laws or regulations or (d) your User Content. Company reserves the right, at your expense, to
              assume the exclusive defense and control of any matter for which you are required to indemnify us, and you
              agree to cooperate with our defense of these claims. You agree not to settle any matter without the prior
              written consent of Company. Company will use reasonable efforts to notify you of any such claim, action or
              proceeding upon becoming aware of it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TermsSection